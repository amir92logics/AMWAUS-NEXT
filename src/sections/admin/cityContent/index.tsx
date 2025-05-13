// material-ui

import {
    Button,
    Stack,
    Dialog,
    Grid,
    InputLabel,
    TextField,
    FormHelperText,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Typography,
    // MenuItem,
    // Select,
    // Autocomplete,
    // Switch
  } from '@mui/material';
  import { useEffect, useState } from 'react';
  import * as Yup from 'yup';
  import { useFormik, Form, FormikProvider } from 'formik';
  // assets
  // import GoogleMaps from './GoogleMap';
  import MainCard from 'components/MainCard';
  import PopupTransition from 'components/@extended/Transitions';
  
  import { dispatch } from 'store';
  import { openSnackbar } from 'store/reducers/snackbar';
  // import { CKEditor } from '@ckeditor/ckeditor5-react';
  // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import axios from 'utils/axios';
  // import ReactTable from 'pages/tables/react-table/filtringv1';
  // import AdminNav from 'components/AdminNav';
  
  // ==============================|| FORMS VALIDATION - ADDRESS ||============================== //
  interface Props {
    data?: any;
  }
  function JobsComp({ data }: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const [openDelete, setOpenDelete] = useState<boolean>(false);
    // const [eventType, setEventType] = useState<string>('Add');
    // const [tableData, setTableData] = useState<any>([]);
    // const [ctyData, setCtyData] = useState<any>([]);
    // const [databyId, setDatabyId] = useState<any>(null);
    // const [openinput, setOpenInput] = useState(false);
    // const [inputValue, setInputValue] = useState('');
    // const [CitydatabyId, setCityDatabyId] = useState<any>(null);
    // const [checked, setChecked] = useState<boolean>(false);
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>, id: any) => {
    //   // setChecked(event.target.checked);
    //   StatusChange(event.target.checked, id);
    // };
    // const _data: any = [
    //   { taskName: 'Test', start_date: 'June 12, 2023 9:23 am', end_date: 'June 12, 2023 9:23 am' },
    //   { taskName: 'Twist', start_date: 'June 12, 2023 9:23 am', end_date: 'June 12, 2023 9:23 am' },
    //   { taskName: 'Test 1', start_date: 'June 12, 2023 9:23 am', end_date: 'June 12, 2023 9:23 am' },
    //   { taskName: 'Test 2', start_date: 'June 12, 2023 9:23 am', end_date: 'June 12, 2023 9:23 am' }
    // ];
    useEffect(() => {
      Datalist();
      // Citylist();
    }, []);
    // const CityDatabyId = (id: any) => {
    //   axios
    //     .get('api/city/get_city_content/' + id)
    //     .then((response) => {
    //       console.log(response?.data?.data);
    //       if (response?.data?.status == 'fail') {
    //         dispatch(
    //           openSnackbar({
    //             open: true,
    //             message: 'Something Went Wrong',
    //             variant: 'alert',
    //             alert: {
    //               color: 'error'
    //             },
    //             close: false
    //           })
    //         );
    //       }
    //       if (response?.data?.status === 'pass') {
    //         setCityDatabyId(response?.data?.data?.id);
    //         // setCityDatabyId(true);
    //         setFieldValue('cityname', response?.data?.data?.cityName);
    //         setFieldValue('statename', response?.data?.data?.state);
    //         setFieldValue('seotitle', response?.data?.data?.seo_title);
    //         setFieldValue('seodescription', response?.data?.data?.seo_description);
    //         setFieldValue('description', response?.data?.data?.seo_content);
    //       }
    //     })
    //     .catch((error) => {
    //       // console.log('erro uploading', jobListDatabyid);
    //     });
    // };
    const Datalist = () => {
      axios
        .get('api/city/get_city_all')
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
            // setTableData(response.data.data);
          }
        })
        .catch((error) => {
          // console.log('erro uploading', jobListDatabyid);
        });
    };
    // const Citylist = () => {
    //   axios
    //     .get('api/city/get_city')
    //     .then((response) => {
    //       console.log(response.data.data);
    //       if (response.data.status == 'fail') {
    //         dispatch(
    //           openSnackbar({
    //             open: true,
    //             message: 'Something Went Wrong',
    //             variant: 'alert',
    //             alert: {
    //               color: 'error'
    //             },
    //             close: false
    //           })
    //         );
    //       }
    //       if (response.data.status === 'pass') {
    //         setCtyData(response.data.data);
    //       }
    //     })
    //     .catch((error) => {
    //       // console.log('erro uploading', jobListDatabyid);
    //     });
    // };
  
    // const jobsColumns = useMemo(
    //   () => [
    //     {
    //       Header: 'City',
    //       accessor: 'cityName'
    //     },
    //     {
    //       Header: 'SEO title',
    //       accessor: 'seo_title'
    //     },
    //     {
    //       Header: 'Action',
    //       accessor: 'action',
    //       Cell: (value: any) => {
    //         console.log(typeof value?.row?.original?.status, '--------');
  
    //         return (
    //           <Stack display="flex" flexDirection="row">
    //             <Switch
    //               defaultChecked={value?.row?.original?.status == 'true' ? true : false}
    //               onChange={(e) => {
    //                 console.log(value?.row?.original?.status);
    //                 handleChange(e, value?.row?.original?.id);
    //               }}
    //             // inputProps={{ 'aria-label': 'controlled' }}
    //             />
    //             <Button
    //               variant="contained"
    //               color="primary"
    //               sx={{ mr: 1 }}
    //               onClick={() => {
    //                 setEventType('Edit');
    //                 handleDialogopen(value?.row?.original?.id);
    //                 console.log(value?.row?.original, 'ppppppppp');
    //                 // CityDatabyId(value?.row?.original?.id)
    //                 // handleOpen(value?.row?.id);
    //               }}
    //             // disabled={isSubmitting}
    //             >
    //               EDIT
    //             </Button>
    //             {/* <Button
    //               variant="contained"
    //               color="error"
    //               onClick={() => {
    //                 handleOpenDelete(value?.row?.original?.id);
    //                 // handleOpen(value?.row?.id);
    //               }}
    //             >
    //               DELETE
    //             </Button> */}
    //           </Stack>
    //         );
    //       }
    //     }
    //   ],
    //   []
    // );
    const handleDialog = () => {
      // setCityDatabyId(false);
      setOpen(false);
      // setFieldValue('cityname', '');
      // setFieldValue('seotitle', '');
      // setFieldValue('seodescription', '');
      // setFieldValue('description', '');
    };
    // const handleDialogopen = (id: any) => {
    //   setOpen(true);
    //   if (id != 'Add') {
    //     CityDatabyId(id);
    //   }
    // };
    const handleDeleteDialog = () => {
      setOpenDelete(false);
    };
    // const handleOpenDelete = (itemid: any) => {
    //   console.log('====================================', CitydatabyId);
    //   console.log(itemid);
    //   setDatabyId(itemid);
    //   console.log('====================================');
    //   setOpenDelete(true);
    // };
    // const handleChangeSwitch = (itemid: any) => {
    //   console.log('====================================', CitydatabyId);
    //   console.log(itemid);
  
    //   console.log('====================================');
    //   setChecked(true);
    // };
  
    const getInitialValues = () => {
      const newEvent = {
        cityname: '',
        statename: '',
        seotitle: '',
        seodescription: '',
        description: ''
      };
  
      return newEvent;
    };
  
    const EventSchema = Yup.object().shape({
      // cityname: Yup.string().max(255).required('City Name is required'),
      seotitle: Yup.string().max(255).required('seotitle is required'),
      seodescription: Yup.string().min(5).required('seotitle is required'),
      description: Yup.string().min(20).required('description is required')
    });
  
    // const deleteHandler = (id: any) => {
    //   axios
    //     .post('api/city/delete_city_content/' + databyId)
    //     .then((response) => {
    //       console.log(response.data.data);
    //       if (response.data.status == 'fail') {
    //         dispatch(
    //           openSnackbar({
    //             open: true,
    //             message: 'Something Went Wrong',
    //             variant: 'alert',
    //             alert: {
    //               color: 'error'
    //             },
    //             close: false
    //           })
    //         );
    //       }
    //       if (response.data.status === 'pass') {
    //         Datalist();
  
    //         dispatch(
    //           openSnackbar({
    //             open: true,
    //             message: 'Deleted Successfully',
    //             variant: 'alert',
    //             alert: {
    //               color: 'success'
    //             },
    //             close: false
    //           })
    //         );
    //       }
    //     })
    //     .catch((error) => {
    //       // console.log('erro uploading', jobListDatabyid);
    //     });
    // };
  
    // const StoreDate = (setSubmitting: any) => {
    //   const data = new FormData();
  
    //   // data.append('city_name', values.cityname);
    //   data.append('seo_title', values.seotitle);
    //   data.append('seo_description', values.seodescription);
    //   data.append('seo_content', values.description);
    //   data.append('created_by', '2');
    //   // setIsLoading(true);
  
    //   axios({
    //     method: 'post',
    //     url: 'api/city/update_city_content/' + CitydatabyId,
    //     data: data,
    //     headers: { 'Content-Type': 'multipart/form-data' }
    //   })
    //     .then((response) => {
    //       // setIsLoading(false);
  
    //       console.log(response.data);
    //       if (response.data.status == 'fail') {
    //         dispatch(
    //           openSnackbar({
    //             open: true,
    //             message: 'Something Went Wrong',
    //             variant: 'alert',
    //             alert: {
    //               color: 'error'
    //             },
    //             close: false
    //           })
    //         );
    //       }
    //       if (response.data.status == 'pass') {
    //         setSubmitting(true);
    //         setOpen(false);
    //         Datalist();
  
    //         // {eventType === 'Edit' ? 'Edit' : 'Add'}
  
    //         dispatch(
    //           openSnackbar({
    //             open: true,
    //             message: 'Data Posted Successfuly',
    //             variant: 'alert',
    //             alert: {
    //               color: 'success'
    //             },
    //             close: false
    //           })
    //         );
  
    //         // setTimeout(() => {
    //         //   navigate('/joblist');
    //         // }, 2000);
    //       }
    //     })
    //     .catch((error) => {
    //       // setIsLoading(false);
  
    //       console.log('erro uploading', error.message);
    //     });
    // };
    // const StatusChange = (status: any, id: any) => {
    //   const data = new FormData();
  
    //   // data.append('city_name', values.cityname);
    //   data.append('status', status);
  
    //   // setIsLoading(true);
  
    //   axios({
    //     method: 'post',
    //     url: 'api/city/update_city_status/' + id,
    //     data: data,
    //     headers: { 'Content-Type': 'multipart/form-data' }
    //   })
    //     .then((response) => {
    //       // setIsLoading(false);
  
    //       console.log(response.data);
    //       if (response.data.status == 'fail') {
    //         dispatch(
    //           openSnackbar({
    //             open: true,
    //             message: 'Something Went Wrong',
    //             variant: 'alert',
    //             alert: {
    //               color: 'error'
    //             },
    //             close: false
    //           })
    //         );
    //       }
    //       if (response.data.status == 'pass') {
    //         Datalist();
  
    //         // {eventType === 'Edit' ? 'Edit' : 'Add'}
  
    //         dispatch(
    //           openSnackbar({
    //             open: true,
    //             message: status ? "Status Changed to Open" : "Status Changed to Close",
    //             variant: 'alert',
    //             alert: {
    //               color: 'success'
    //             },
    //             close: false
    //           })
    //         );
  
    //         // setTimeout(() => {
    //         //   navigate('/joblist');
    //         // }, 2000);
    //       }
    //     })
    //     .catch((error) => {
    //       // setIsLoading(false);
  
    //       console.log('erro uploading', error.message);
    //     });
    // };
    const formik = useFormik({
      initialValues: getInitialValues(),
      validationSchema: EventSchema,
      onSubmit: (values, { setSubmitting }) => {
        // console.log(values, 'cales');
        // StoreDate(setSubmitting);
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
  
    return (
      <>
      {/* <AdminNav /> */}
        <MainCard
         
        // secondary={
        //   <Button
        //     variant="contained"
        //     disabled={isSubmitting}
        //     onClick={() => {
        //       setEventType('Add');
        //       handleDialogopen('Add');
        //     }}
        //   >
        //     ADD NEW
        //   </Button>
        // }
        >
          {/* <ReactTable columns={jobsColumns} data={tableData} tableType={'filterable'} /> */}
          <Dialog
            maxWidth="md"
            TransitionComponent={PopupTransition}
            keepMounted
            fullWidth
            onClose={handleDialog}
            open={open}
            sx={{ '& .MuiDialog-paper': { p: 2 }, transition: 'transform 225ms' }}
            aria-describedby="alert-dialog-slide-description"
          >
            <FormikProvider value={formik}>
              <Form noValidate onSubmit={handleSubmit}>
                {/* <DialogTitle>{eventType === 'Edit' ? 'EDIT' : 'ADD NEW'}</DialogTitle> */}
                <Divider />
                <DialogContent sx={{ p: 2.5 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        {/* <InputLabel htmlFor="cityname">City Name</InputLabel> */}
                        {/* {!CitydatabyId ? ( */}
                        {/* <Autocomplete
                            fullWidth
                            id="cityname"
                            open={openinput}
                            onOpen={() => {
                              if (inputValue) {
                                setOpenInput(true);
                              }
                            }}
                            onClose={() => setOpenInput(false)}
                            inputValue={inputValue}
                            onInputChange={(e: any, value: any, reason: any) => {
                              setInputValue(value);
                              setFieldValue('cityname', value);
                              console.log(value);
  
                              // setFieldValue('cityname', value);
  
                              if (!value) {
                                setOpenInput(false);
                              }
                            }}
                            options={ctyData}
                            getOptionLabel={(option: any) => option.city_name}
                            style={{ width: 300 }}
                            renderInput={(params: any) => <TextField name="cityname" {...params} label="City Name" variant="outlined" />}
                          />
  
                          {touched.cityname && errors.cityname && (
                            <FormHelperText error id="cityname-helper">
                              {errors?.cityname}
                            </FormHelperText>
                          )}
                        </>
                      ) : ( */}
                        {/* <TextField aria-readonly value={ values.cityname} /> */}
                        <Typography variant="h4">
                          {values?.cityname},{values?.statename}
                        </Typography>
                        {/* )} */}
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="tags">SEO Title</InputLabel>
                        <TextField
                          fullWidth
                          // InputProps={{
                          //   readOnly: true
                          // }}
                          id="seotitle"
                          value={values.seotitle}
                          name="seotitle"
                          onChange={(_tags) => setFieldValue('seotitle', _tags.target.value)}
                        // onBlur={handleBlur}
                        // onChange={handleChange}
                        // placeholder={lname}
                        />
                        {touched.seotitle && errors.seotitle && (
                          <FormHelperText error id="seotitle-helper">
                            {errors.seotitle}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="tags">SEO Description</InputLabel>
                        <TextField
                          fullWidth
                          // InputProps={{
                          //   readOnly: true
                          // }}
                          id="seodescription"
                          value={values.seodescription}
                          name="seodescription"
                          onChange={(_tags) => setFieldValue('seodescription', _tags.target.value)}
                        // onBlur={handleBlur}
                        // onChange={handleChange}
                        // placeholder={lname}
                        />
                        {touched.seodescription && errors.seodescription && (
                          <FormHelperText error id="seodescription-helper">
                            {errors.seodescription}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1.25}>
                        <InputLabel htmlFor="description">SEO Content</InputLabel>
                        {/* <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}> */}
                        {/* <CKEditor
                          editor={ClassicEditor}
                          data={values.description}
                          onReady={(editor) => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                          }}
                          onChange={(event, editor) => {
                            const _data = editor.getData();
  
                            setFieldValue('description', _data);
                            console.log({ _data });
                          }}
                        // onBlur={(event, editor) => {
                        //   console.log('Blur.', editor);
                        // }}
                        // onFocus={(event, editor) => {
                        //   console.log('Focus.', editor);
                        // }}
                        /> */}
                        {/* <TextField
                          fullWidth
                          InputProps={{
                            readOnly: true
                          }}
                          id="description"
                          value={values.description}
                          name="description"
                          onChange={(_des) => setFieldValue('description', _des)}
                          // onBlur={handleBlur}
                          // onChange={handleChange}
                          // placeholder={phone}
                        /> */}
                        {/* </Stack> */}
                        {touched.description && errors.description && (
                          <FormHelperText error id="description-helper">
                            {errors.description}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                  </Grid>
                </DialogContent>
                {/* <Divider /> */}
                <DialogActions sx={{ p: 2.5 }}>
                  <Grid container justifyContent="flex-end" alignItems="center">
                    {/* <Grid item>
                  {!isCreating && (
                    <Tooltip title="Delete Event" placement="top">
                      <IconButton onClick={deleteHandler} size="large" color="error">
                        <Trash variant="Bold" />
                      </IconButton>
                    </Tooltip>
                  )}
                </Grid> */}
                    <Grid item>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Button color="error" onClick={handleDialog}>
                          Cancel
                        </Button>
                        <Button type="submit" variant="contained" >
                          {/* {eventType === 'Edit' ? 'Edit' : 'Add'} */}
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </DialogActions>
              </Form>
            </FormikProvider>
          </Dialog>
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
                    {/* <Grid item>
                  {!isCreating && (
                    <Tooltip title="Delete Event" placement="top">
                      <IconButton onClick={deleteHandler} size="large" color="error">
                        <Trash variant="Bold" />
                      </IconButton>
                    </Tooltip>
                  )}
                </Grid> */}
                    <Grid item>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Button color="error" onClick={handleDeleteDialog}>
                          Cancel
                        </Button>
                        {/* <Button type="submit" variant="contained" color="error" onClick={deleteHandler}>
                        Delete
                      </Button> */}
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