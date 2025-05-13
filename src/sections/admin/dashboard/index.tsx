// material-ui

import {
  Button,
  Stack,
  Dialog,
  Grid,
  InputLabel,
  TextField,
  // FormHelperText,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import MainCard from 'components/MainCard';
import PopupTransition  from 'components/@extended/Transitions';
import { CustomPagination } from 'components/customPagination';

import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import type { Editor } from '@ckeditor/ckeditor5-core';
import axios from 'utils/axios';
import ReactTable from 'components/tables/react-table/simpleTable';
import AdminNav from 'components/AdminNav';
import { FormControl } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import '../../../app/styles.css';
import { FormHelperText } from '@mui/material';
import * as Yup from 'yup';
import { Modal } from '@mui/base';
import { Box } from '@mui/material';
const xcicle = '/assets/images/home/x-circle.png';
import axiosServices from 'utils/axios';
import Image from 'next/image';

// ==============================|| FORMS VALIDATION - ADDRESS ||============================== //
interface Props {
  data?: any;
}
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
function JobsComp({ data }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [eventType, setEventType] = useState<string>('Add');
  const [tableData, setTableData] = useState<any>([]);
  const [ctyData, setCtyData] = useState({ id: '', city: '', state: '', type: '',seo_title: '', seo_description: '', content: '', main_keyword: '', lsi_keywords: '' });
  const [topStates, setStates] = useState<any>([]);
  const [topCites, setTopCites] = useState<any>([]);
  const [windowWidth, setWindowWidth] = useState<any>(getWindowSize().innerWidth > 600 ? false : true);
  const [pageCount, setPageCount] = useState<any>(1);

  useEffect(() => {
    Datalist();
  }, []);

  const handleNextPgeCount = () => {
    if(tableData?.last_page > pageCount){
        setPageCount(tableData?.current_page + 1)
        getNextPrev('', tableData?.current_page + 1)
    }
}
const handlePrePgeCount = () => {
    if(pageCount > 1){
        setPageCount(tableData?.current_page - 1)
        getNextPrev('', tableData?.current_page - 1)
    }
}
  useEffect(() => {
    function handleWindowResize() {
        if (getWindowSize().innerWidth > 600) {
            setWindowWidth(false)

        } else {
            setWindowWidth(true)

        }

    }

    window.addEventListener('resize', handleWindowResize);
}, []);

  const Datalist = () => {
    axios
      .get('api/city/get-content-all')
      .then((response) => {
        console.log(response.data.data);
        if (response.data.status == 'fail') {
          dispatch(
            openSnackbar({
              open: true,
              message: 'Something Went Wrong',
              variant: 'alert',
              alert: {
                color: 'error'
              },
              close: false
            })
          );
        }
        if (response.data.status === 'pass') {

          setTableData(response.data.data);
        }
      })
      .catch((error) => {
        // console.log('erro uploading', jobListDatabyid);
      });
  };

  const editorConfiguration = {
    toolbar: {
      items: [
        'heading', '|',
        'bold', 'italic', 'blockQuote', 'link',
        'numberedList', 'bulletedList', 'imageUpload',
        'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells',
        'mediaEmbed', '|', 'undo', 'redo'
      ],
      shouldNotGroupWhenFull: true
    },
    toolbarSticky: true // ✅ this makes the toolbar sticky while scrolling
  };
  const jobsColumns: any = useMemo(
    () => [
      {
        Header: 'State',
        accessor: 'state'
      },
      {
        Header: 'City',
        accessor: 'city'
      },
      {
        Header: 'SEO Title',
        accessor: 'seo_title'
      },
      {
        Header: 'SEO Description',
        accessor: 'seo_description',
        Cell: (value: any) => value?.row?.original?.seo_description ? (`${value?.row?.original?.seo_description.slice(0, 100)}...`) : {}

      },
      
      {
        Header: 'Content',
        accessor: 'content',
        Cell: (value: any) => value?.row?.original?.content ? (`${value?.row?.original?.content.slice(0, 100)}...`) : {}
      },
      {
        Header: 'Keywords',
        accessor: 'main_keyword'
      },
      {
        Header: 'List Keywords',
        accessor: 'lsi_keywords',
        Cell: (value: any) => value?.row?.original?.lsi_keywords ? (`${value?.row?.original?.lsi_keywords.slice(0, 100)}...`) : {}

      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: (value: any) => {
          console.log(typeof value?.row?.original?.status, '--------');

          return (
            <Stack display="flex" flexDirection="row" justifyContent={'flex-end'}>

              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 1, borderRadius: '20px',  background: '#000', '&:hover': {
                  background: '#000'} }}
                onClick={() => {
                  setEventType('Edit');
                  handleDialogopen(value?.row?.original?.id);
                  setCtyData(value?.row?.original)
                  console.log(value?.row?.original, 'ppppppppp');
                  handleAllStates()
                  handleStateDetailByStatename(value?.row?.original?.state)

                }}

              >
                Edit
              </Button>

            </Stack>
          );
        }
      }
    ],
    []
  );
  const handleDialog = () => {

    setOpen(false);

  };
  const handleDialogopen = (id: any) => {
    setOpen(true);

  };
  const handleDeleteDialog = () => {
    setOpenDelete(false);
  };

  const types = [
    'infant daycares',
    'toddler daycares',
    'in home daycares',
    'special needs daycares',
    'daycare centers',
    'preschools',
    'childcare',
    'daycare'
  ];
  const getInitialValues = () => {
    const newEvent = {
      state: eventType == 'Edit' ? ctyData.state : '',
      city: eventType == 'Edit' ? ctyData.city : '',
      type: eventType == 'Edit' ? ctyData.type : '',
      title: eventType == 'Edit' ? ctyData?.seo_title : '',
      description: eventType == 'Edit' ? ctyData?.seo_description : '',
      content: eventType == 'Edit' ? ctyData?.content : '',
      keywords: eventType == 'Edit' ? ctyData?.main_keyword : '',
      likeywords: eventType == 'Edit' ? ctyData?.lsi_keywords : ''
    };

    return newEvent;
  };

  const StoreDate = (setSubmitting: any) => {
    const data = new FormData();
    debugger
    data.append('state', values.state);
    // data.append('state_code', selectedState.abr);
    data.append('city', values.city);
    data.append('seo_title', values.title);
    data.append('seo_description', values.description);
    data.append('content', values.content);
    data.append('main_keyword', values.keywords);
    data.append('lsi_keywords', values.likeywords);
    data.append('type', values.type);

    const _url = eventType == 'Edit' ? 'api/city/update-content/' + ctyData.id : 'api/city/save-content'
    axios({
      method: 'post',
      url: _url,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        // setIsLoading(false);

        console.log(response.data);
        if (response.data.status == 'fail') {
          dispatch(
            openSnackbar({
              open: true,
              message: 'Something Went Wrong',
              variant: 'alert',
              alert: {
                color: 'error'
              },
              close: false
            })
          );
        }
        if (response.data.status == 'success') {
          setSubmitting(true);
          setOpen(false);
          Datalist();

          // {eventType === 'Edit' ? 'Edit' : 'Add'}

          dispatch(
            openSnackbar({
              open: true,
              message: 'Data Posted Successfuly',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );

          // setTimeout(() => {
          //   navigate('/joblist');
          // }, 2000);
        }
      })
      .catch((error) => {
        // setIsLoading(false);

        console.log('erro uploading', error.message);
      });
  };
  const formik = useFormik({
    initialValues: getInitialValues(),
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      state: Yup.string()
        .required('State is Required'),
      city: Yup.string()
        .required('City is Required'),
      type: Yup.string()
        .required('Category Type is Required')
    }),
    onSubmit: (values, { setSubmitting }) => {
      // console.log(values, 'cales');
      StoreDate(setSubmitting);
      // alert("ok")
      // return

      // try {
      //   // const newEvent = {
      //   //   firstname: values.firstname,
      //   // };

      //   // if (event) {
      //   //   dispatch(updateEvent(event.id, newEvent));
      //   //   dispatch(
      //   //     openSnackbar({
      //   //       open: true,
      //   //       message: 'Event update successfully.',
      //   //       variant: 'alert',
      //   //       alert: {
      //   //         color: 'success'
      //   //       },
      //   //       close: false
      //   //     })
      //   //   );
      //   // } else {
      //   //   dispatch(createEvent(newEvent));
      //   //   dispatch(
      //   //     openSnackbar({
      //   //       open: true,
      //   //       message: 'Event added successfully.',
      //   //       variant: 'alert',
      //   //       alert: {
      //   //         color: 'success'
      //   //       },
      //   //       close: false
      //   //     })
      //   //   );
      //   // }

      //   setSubmitting(false);
      // } catch (error) {
      //   console.error(error);
      // }
    }
  });

  const { values, errors, touched, handleSubmit, setFieldValue } = formik;
  const handleAllStates = () => {
    debugger
    axios({
      method: 'get',
      url: 'api/search/all_states',
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        setStates(response.data?.data);
        // setTopSearches(response.data?.data?.popularSearches);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  const handleStateDetailByStatename = (selectedState: any) => {
    debugger
    axios({
      method: 'get',
      url: `api/search/get_cities/${selectedState}`,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response: any) => {
        if (response.status == 'fail') {
        } else {
          setTopCites(response.data.data);
        }

      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  const style = {
    maxHeight: '75vh', // You can adjust the maximum height as needed
    overflowY: 'auto',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #ccc',
    borderRadius:1,
    boxShadow: 24,
    p: 4,
    zIndex: 99999
  };

  const getNextPrev = (link?: any, _pageCount?: any) => {
    debugger
  let url: any;
  if (windowWidth) {
      url = `api/city/get-content-all?page=${_pageCount}&perPage=1`
      axiosServices
          .get(url)
          .then((response) => {
              if (response.data.status === 'fail') {
                  dispatch(
                      openSnackbar({
                          open: true,
                          message: 'Something Went Wrong',
                          variant: 'alert',
                          alert: {
                              color: 'error'
                          },
                          close: false
                      })
                  );
              }
              if (response.data.status === 'pass') {
                debugger
                // setInvoicesData(response?.data?.data);
                // setPaginationData(response?.data);
                setTableData(response.data.data);
                  // setPageCount(link.label);

              }
          })
          .catch((error) => {
              // Handle error
          });
  } else {
      if (link?.url) {
          url = new URL(link?.url);

          axiosServices
              .get(url)
              .then((response) => {
                  if (response.data.status === 'fail') {
                      dispatch(
                          openSnackbar({
                              open: true,
                              message: 'Something Went Wrong',
                              variant: 'alert',
                              alert: {
                                  color: 'error'
                              },
                              close: false
                          })
                      );
                  }
                  if (response.data.status === 'pass') {
                    setTableData(response.data.data);

                      // setPageCount(link.label);

                  }
              })
              .catch((error) => {
                  // Handle error
              });
      }
  }
}
  return (
    <>
      <AdminNav />
      <MainCard



      >
        <Stack sx={{ display: 'flex', justifyContent: 'right', flexDirection: 'row', py: 5 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 1,  borderRadius: '20px',  background: '#000', '&:hover': {
                              background: '#000' // Adjust the alpha channel (0.8) as needed
                            } }}
            onClick={() => {
              setEventType('Add');
              handleDialogopen(null);
              setCtyData({ id: '', city: '', state: '',seo_title: '', seo_description: '', type: '', content: '', main_keyword: '', lsi_keywords: '' })

              handleAllStates()
            }}

          >
            Add New City Content
          </Button>
        </Stack>
        {tableData?.data?.length > 0 && <ReactTable columns={jobsColumns} data={tableData.data} tableType={'filterable'} />}
        {tableData && (!windowWidth ? <Stack
                        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%', p: 1 }}
                    >
                        <CustomPagination data={tableData} getNextPrev={getNextPrev} />
                    </Stack> : <Stack
                        sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', py: 1 }}
                    >
                        <CustomPagination data={tableData} getNextPrev={getNextPrev} isMobile={windowWidth} handlePrePgeCount={handlePrePgeCount} handleNextPgeCount={handleNextPgeCount} />
                    </Stack>)}

        <Modal open={open} onClose={handleDialog} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Box
              onClick={handleDialog}
              sx={{ position: 'absolute', top: 10, right: '25px', cursor: 'pointer', zIndex: 9 }}
            >
               <Image
              height={20}
              width={20}
              src={xcicle}
              alt={'xcicle'}
            />
              {/* <img src={xcicle} height={'20px'} alt="xcicle" /> */}
            </Box>
            <FormikProvider value={formik}>
              <Form noValidate onSubmit={handleSubmit}>
                <DialogTitle><Typography variant="h2" sx={{ py: 3 }}>
                  City Content
                </Typography></DialogTitle>
                <Divider />
                <DialogContent sx={{ p: 2.5 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>

                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="state">State</InputLabel>

                        <Select

                          value={values.state}
                          onChange={(_tags) => {
                            handleStateDetailByStatename(_tags.target.value)
                            // setSelectedState(_tags.target.value);
                            setFieldValue('state', _tags.target.value)
                          }}
                        >
                          {topStates.map((item: any) => (
                            <MenuItem key={item.state} value={item.state} >
                              {item.state}
                            </MenuItem>
                          ))}
                        </Select>


                        {touched.state && errors.state && (
                          <FormHelperText error id="state-helper">
                            {errors.state}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="city">City</InputLabel>
                        <FormControl fullWidth>


                          <Select
                            sx={{ width: '100%', background: 'white', outline: 'none', border: 'none', borderRadius: 1, color: '#000' }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="city"
                            defaultValue={ctyData?.city}
                            value={values.city}
                            onChange={(_tags) => setFieldValue('city', _tags.target.value)}
                          >
                            {topCites.map((item: any) => (
                              <MenuItem key={item.city} value={item.city}>
                                {item.city}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>

                        {touched.city && errors.city && (
                          <FormHelperText error id="city-helper">
                            {errors.city}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="likeywords">Category Type</InputLabel>
                        <FormControl fullWidth>

                          <Select
                            sx={{ width: '100%', background: 'white', outline: 'none', border: 'none', borderRadius: 1 }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="type"
                            defaultValue={ctyData?.type}
                            value={values.type}
                            onChange={(_tags) => setFieldValue('type', _tags.target.value)}
                          >
                            {types.map((item: any) => (
                              <MenuItem key={item} value={item}>
                                {item}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        {touched.type && errors.type && (
                          <FormHelperText error id="type-helper">
                            {errors.type}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="likeywords">SEO Title</InputLabel>
                        <TextField
                          fullWidth

                          id="title"
                          value={values.title}
                          name="title"
                          onChange={(_tags) => setFieldValue('title', _tags.target.value)}

                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="likeywords">SEO Description</InputLabel>
                        <TextField
                          fullWidth

                          id="description"
                          value={values.description}
                          name="description"
                          onChange={(_tags) => setFieldValue('description', _tags.target.value)}

                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="likeywords">List Keywords</InputLabel>
                        <TextField
                          fullWidth

                          id="likeywords"
                          value={values.likeywords}
                          name="likeywords"
                          onChange={(_tags) => setFieldValue('likeywords', _tags.target.value)}

                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="keywords">Main Keywords</InputLabel>
                        <TextField
                          fullWidth
                          id="keywords"
                          value={values.keywords}
                          name="keywords"
                          onChange={(_tags) => setFieldValue('keywords', _tags.target.value)}

                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="content">City Content</InputLabel>
                        <div className="editor-wrapper" >

                          <CKEditor
                            editor={ClassicEditor as unknown as { create(...args: any[]): Promise<Editor> }}
                            data={values?.content}

                            config={editorConfiguration}
                            onReady={(editor) => {
                              // You can store the "editor" and use when it is needed.
                              console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                              const _data = editor.getData();

                              setFieldValue('content', _data);
                              console.log({ _data });
                            }}
                          />
                        </div>
                      </Stack>
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions sx={{ p: 2.5 }}>
                  <Grid container justifyContent="flex-end" alignItems="center">
                    <Grid item>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Button color="error" onClick={handleDialog}>
                          Cancel
                        </Button>
                        <Button type="submit" variant="contained" sx={{
                          backgroundColor: '#000', '&:hover': {
                            background: '#000' // Adjust the alpha channel (0.8) as needed
                          }
                        }} >
                          {eventType === 'Edit' ? 'Update' : 'Add'}
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </DialogActions>
              </Form>
            </FormikProvider>
          </Box>
        </Modal>
        <Dialog
          maxWidth="sm"
          TransitionComponent={PopupTransition}
          keepMounted
          fullWidth
          onClose={handleDeleteDialog}
          open={openDelete}
          sx={{ '& .MuiDialog-paper': { p: 2 }, transition: 'transform 225ms' }}
          aria-describedby="alert-dialog-slide-description"
        >
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate>
              <DialogTitle>Delete</DialogTitle>
              <Divider />
              <DialogContent sx={{ p: 2.5 }}>
                <Typography>Are you sure you want to delete?</Typography>
              </DialogContent>
              {/* <Divider /> */}
              <DialogActions sx={{ p: 2.5 }}>
                <Grid container justifyContent="flex-end" alignItems="center">
                  <Grid item>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Button color="error" onClick={handleDeleteDialog}>
                        Cancel
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </DialogActions>
            </Form>
          </FormikProvider>
        </Dialog>
      </MainCard>
    </>
  );

}

export default JobsComp;