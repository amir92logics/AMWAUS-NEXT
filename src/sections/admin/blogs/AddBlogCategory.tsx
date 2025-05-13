import { Typography, Box, Button, Select, Grid, InputLabel, FormControl, Modal } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Stack } from '@mui/material';
import { useEffect, useState, useMemo } from 'react';
import axios from 'utils/axios';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import ReactTable from 'pages/tables/react-table/filtering';
function AddBlogCategory() {
  const [open, setOpen] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<any>(null);
  const [allblogs, setAllBlogs] = useState<any>([]);
  console.log("🚀 ~ file: AddBlogCategory.tsx:13 ~ AddBlogCategory ~ allblogs:", allblogs)
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [categoryV, setCategoryValidation] = useState<any>(false);
  const category = [
    {
      categoryName: "All"
    },
    {
      categoryName: "Parenting Tips"
    },
    {
      categoryName: "Family Activities"
    },
    {
      categoryName: "Health & Wellness"
    },
    {
      categoryName: "Finding a Program"
    },
    {
      categoryName: "Early Learning"
    },
    {
      categoryName: "Misscellaneous"
    }
    
  ]
  useEffect(() => {
    BlogCategory();
  }, []);

  const handleCategorySelect = (event: any) => {
    setCategoryName(event.target.value);
  };


  const submit = async () => {
    var count = 0;

    if (categoryName) {
      setCategoryValidation(false);
    } else {
      setCategoryValidation(true);
    }

    if (count > 0) {
      return;
    }
    const data = new FormData();
    data.append('name', categoryName);

    // setisLoading(true)

    axios({
      method: 'post',
      url: 'api/blogCategory/store_blog_category',
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        if (response.data.status === 'pass') {
          BlogCategory();
          setOpen(false);

          // setisLoading(false)
          ResetForm();
          dispatch(
            openSnackbar({
              open: true,
              message: 'Blog is saved successfuly',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        } else {
          dispatch(
            openSnackbar({
              open: true,
              message: 'Category Alrady Exist',
              variant: 'alert',
              alert: {
                color: 'info'
              },
              close: false
            })
          );
        }
      })
      .catch((response) => {
        // setisLoading(false)

        console.log('Error Raised => ', response.message);
      });
  };

  //Reset the form here.
  const ResetForm = () => {
    setCategoryName("");
  };

  const BlogCategory = () => {
    axios
      .get('api/blogCategory/get_blog_category')
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
          setAllBlogs(response.data.data);
        }
      })
      .catch((error) => {
        // console.log('erro uploading', jobListDatabyid);
      });
  };
  // const BlogbyId = (id: any) => {
  //   axios
  //     .get('api/blog/get_blog_content/' + id)
  //     .then((response) => {
  //       console.log(response.data.data);
  //       if (response.data.status === 'fail') {
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
  //         setCategoryName(response?.data?.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('erro uploading', error.message);
  //     });
  // };
  const handleClose = () => {
    setOpen(false);
    setOpenEdit(false);
    ResetForm();
  };
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>, id: any) => {
  //   // setChecked(event.target.checked);
  //   StatusChange(event.target.checked, id);
  //   console.log(event.target.checked);
  // };
  // const StatusChange = (status: any, id: any) => {
  //   const data = new FormData();

  //   // data.append('city_name', values.cityname);
  //   data.append('status', status);

  //   // setIsLoading(true);

  //   axios({
  //     method: 'post',
  //     url: 'api/blog/blog_status/' + id,
  //     data: data,
  //     headers: { 'Content-Type': 'multipart/form-data' }
  //   })
  //     .then((response) => {
  //       // setIsLoading(false);

  //       console.log(response.data);
  //       if (response.data.status === 'fail') {
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
  //         BlogCategory();

  //         // {eventType === 'Edit' ? 'Edit' : 'Add'}

  //         dispatch(
  //           openSnackbar({
  //             open: true,
  //             message: status ? 'Status Changed to Open' : 'Status Changed to Close',
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
  const jobsColumns = useMemo(
    () => [
      {
        Header: 'Category Name',
        accessor: 'name'
      },
      // {
      //   Header: 'description',
      //   accessor: 'short_description'
      // },
      // {
      //   Header: 'Action',
      //   accessor: 'action',
      //   Cell: (value: any) => {
      //     console.log(typeof value?.row?.original?.status, '--------');

      //     return (
      //       <Stack display="flex" flexDirection="row">
      //         <Switch
      //           defaultChecked={value?.row?.original?.status === 'true' ? true : false}
      //           onChange={(e) => {
      //             console.log(value?.row?.original?.status);
      //             handleChange(e, value?.row?.original?.id);
      //           }}
      //         />
      //         <Button
      //           variant="contained"
      //           color="primary"
      //           sx={{ mr: 1 }}
      //           onClick={() => {
      //             // handleDialogopen(value?.row?.original?.id);
      //             console.log(value?.row?.original, 'ppppppppp');
      //             BlogbyId(value?.row?.original?.id);
      //             setOpenEdit(true);
      //             setOpen(true);
      //             // handleOpen(value?.row?.id);
      //           }}
      //         // disabled={isSubmitting}
      //         >
      //           EDIT
      //         </Button>
      //       </Stack>
      //     );
      //   }
      // }
    ],
    []
  );
  const style = {
    maxHeight: '75vh', // You can adjust the maximum height as needed
    overflowY: 'auto',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

  return (
    <>
      <Stack sx={{ background: '#fff' }}>
        <Stack sx={{ display: 'flex', justifyContent: 'right', flexDirection: 'row', py: 5 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 1 }}
            onClick={() => {
              setOpen(true);
            }}
          // disabled={isSubmitting}
          >
            Add Blog Category
          </Button>
        </Stack>
        <Stack sx={{ px: 5 }}>
          <Typography variant='h3' sx={{ py: 3 }} >Blog Category</Typography>
          <ReactTable columns={jobsColumns} data={allblogs} tableType={''} />
        </Stack>


      </Stack>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff', py: 4 }}>
            <Typography variant="h2" sx={{ py: 3 }}>
              Blog Category
            </Typography>
            <Grid container>
              <Grid item sm={12} xs={12} md={12} lg={12}>
                <Stack sx={{ mx: 2, mt: { md: 4, xs: 2 } }}>

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{ color: '#A0A4A8', lineHeight: 'normal' }}>
                     <span>Category</span> 
                    </InputLabel>
                    <Select
                      sx={{ width: '100%', background: 'white', outline: 'none', border: 'none', borderRadius: 1 }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={categoryName}
                      onChange={handleCategorySelect}
                    >
                      {category.map((item: any) => (
                        <MenuItem key={item.id} value={item.categoryName}>
                          {item.categoryName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {categoryV && (
                    <Typography component="p" sx={{ color: 'red' }}>
                      Select Category
                    </Typography>
                  )}
                </Stack>
              </Grid>

            </Grid>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'right' }} alignItems="right">
              <Button
                variant="contained"
                type="button"
                style={{ backgroundColor: '#219EBC' }}
                onClick={() => {
                  //handleClose();
                  if (!openEdit) {
                    submit();
                  }
                }}
              >
                {!openEdit ? 'Submit' : 'Update'}
              </Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}

export default AddBlogCategory;