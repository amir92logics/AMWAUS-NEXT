import { Editor } from "@tinymce/tinymce-react";
import * as React from "react";
import * as _ from "lodash";

export class DocumentEditor extends React.Component {
  constructor(props) {
    super(props);
    // this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);

    this.state = {
      // documentName: "Document 1",
      editorContent: '',
      displayIsSaving: false
    };

    this.throttledSaveToServer = _.throttle(() => {
      setTimeout(() => {
        this.debouncedEndSaving();
        console.log("Saved to server", this.state.documentName, this.state.editorContent);
      }, 500);
    }, 500);

    this.debouncedEndSaving = _.debounce(() => {
      this.setState({ displayIsSaving: false });
    }, 1000);
  }

  handleEditorChange(editorContent) {
    this.props.onChange( editorContent );
  }

  // handleNameChange(documentName) {
  //   this.save({ documentName });
  // }

  save(newPartialState) {
    this.setState({
      ...newPartialState,
      displayIsSaving: true
    }, () => {
      this.throttledSaveToServer();
    });
  }

  componentWillUnmount() {
    this.debouncedEndSaving.cancel();
    this.throttledSaveToServer.cancel();  
  }
  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
   
    this.setState({ editorContent: nextProps.data });
  }
  render() {
  // console.log("Saved to server", this.props.data);
  return (
      <div className="document-editor">
        <Editor
          apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
          onEditorChange={this.handleEditorChange}
          initialValue={this.props.data}
          value={this.state.editorContent}
          init={{
            height: 800,
            icons: "jam",
            skin: "fabric",
            content_css: "document",
            resize: false,
            plugins: 'powerpaste casechange searchreplace autolink directionality visualblocks visualchars image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker editimage help formatpainter permanentpen charmap linkchecker emoticons advtable export autosave advcode fullscreen',
          }}
        />
      </div>
    );
  }
}