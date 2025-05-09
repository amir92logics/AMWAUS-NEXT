'use client';


import {  Box, Grid, Typography} from '@mui/material';
import { useEffect, useState } from 'react';
// import sectionfiveImage1 from 'assets/images/icons/sectionfiveImage1.png';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import axios from 'utils/axios';
import Image from 'next/image';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Button from '@mui/material-next/Button';
// import MetaTags from 'react-meta-tags';
import {
  // createTheme,
  // alpha,
  // styled,
  // useTheme
} from '@mui/material/styles';
function Blogs() {
  // const theme = useTheme();
  const router = useRouter();

  // const mddown = useMediaQuery(theme.breakpoints.down('sm'));

  const [allblogs, setAllBlogs] = useState<any>([]);
  // const [open, setOpen] = useState<boolean>(false);
  // const [blogdetail, setblogdetail] = useState<any>({});
  // const handleOpen = (id: any) => {
  //   setOpen(true);
  //   BlogbyId(id);
  // };

  useEffect(() => {
    Bloglist();
  }, []);

  // const BlogbyId = (id: any) => {
  //   axios
  //     .get('api/blog/get_blog_content/' + id)
  //     .then((response) => {
  //       // console.log(response.data.data);
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
  //         setblogdetail(response?.data?.data);
  //         // console.log(blogdetail);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('erro uploading', error.message);
  //     });
  // };
  // const handleClose = () => setOpen(false);

  const Bloglist = () => {
    axios
      .get('api/blog/get_blogs')
      .then((response) => {
        // console.log(response.data.data);
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
          setAllBlogs(response.data.data);
        }
      })
      .catch((error) => {
        // console.log('erro uploading', jobListDatabyid);
      });
  };

  const truncateText = (text: any, maxWords: any) => {
    if (!text) {
      return '';
    }

    const words = text.split(' ');

    if (words.length <= maxWords) {
      return text;
    }

    const truncatedText = words.slice(0, maxWords).join(' ');
    return `${truncatedText} .......`;
  };

  // const style = {
  //   maxHeight: '75vh', // You can adjust the maximum height as needed
  //   overflowY: 'auto',
  //   position: 'absolute' as 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: !mddown ? 800 : 300,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #ccc',
  //   borderRadius:1,
  //   boxShadow: 24,
  //   p: 4,
  //   zIndex: 99999
  // };
  return (
    <>
      {/* <Grid
        container
        sx={{
          // color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: { xs: 'auto', md: 'center' },
          px: { xs: 0, md: 37 },
          py: 8,
          pt: 10
        }}
      >
        <Typography
          variant="subheading1"
          sx={{ textAlign: { xs: 'left', sm: 'center' }, fontSize: { lg: '30px', md: '28px', sm: '26px', xs: '25px' } }}
        >
          Featured Articles
        </Typography>
      </Grid> */}
      {/* <Grid container justifyContent="center" spacing={2}>
        {allblogs.map((item: any) => {
          return (
            <Grid container direction="column" alignItems="center" item xs={12} sm={6} md={4} lg={4} key={item.id} mt={6}>
              <Card
                sx={{ maxWidth: 450, minHeight: 380, cursor: 'pointer' }}
                onClick={() => {
                  navigate('/blogsDetail/' + item?.id + '/' + item?.slug);
                  handleOpen(item?.id);
                }}
              >
                <CardMedia sx={{ height: 140 }} image={process.env.NEXT_APP_API_URL + item?.blog_img} title={item?.title} />
                <CardContent>
                  <Typography gutterBottom sx={{ fontSize: '16px', color: '#000', fontWeight: '600' }} component="div">
                    {item?.title}
                  </Typography>
                  <Typography variant="bodytext" sx={{}} mt={4}>
                    {truncateText(item?.short_description, 19)}
                  </Typography>
                </CardContent>
                // {/* <CardActions>
                //   <Button size="small">Share</Button>
                //   <Button size="small">Learn More</Button>
                // </CardActions> 
              </Card>
            </Grid>
          );
        })}
      </Grid> */}
      {/* <Grid
        container
        sx={{
          // color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: { xs: 'auto', md: 'center' },
          px: { xs: 0, md: 37 },
          py: 8,
          pt: 10
        }}
      >
        <Typography
          variant="subheading1"
          sx={{ textAlign: { xs: 'left', sm: 'center' }, fontSize: { lg: '30px', md: '28px', sm: '26px', xs: '25px' } }}
        >
          For Parents
        </Typography>
      </Grid> */}
      <Grid container justifyContent="center" spacing={2}>
        {allblogs.map((item: any) => {
          return (
            <Grid container direction="column" alignItems="center" item xs={12} sm={6} md={4} lg={4} key={item.id} mt={6}>
               <Card
      sx={{ maxWidth: 450, minHeight: 380, cursor: 'pointer' }}
      onClick={() => {
        router.push(`/blogsDetail/${item?.id}/${item?.slug}`);
      }}
    >
      <Box sx={{ position: 'relative', width: '100%', height: 140 }}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${item?.blog_img}`}
          alt={item?.title}
          fill
          style={{ objectFit: 'cover', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
        />
      </Box>

      <CardContent>
        <Typography gutterBottom sx={{ fontSize: '16px', color: '#000', fontWeight: '600' }} component="div">
          {item?.title}
        </Typography>
        <Typography variant="body2" mt={4}>
          {truncateText(item?.short_description, 19)}
        </Typography>
      </CardContent>
    </Card>
            </Grid>
          );
        })}
        {/* <Grid xs={12} sm={12} md={4} lg={4}>
        <Box
          sx={{ p: 4, cursor: 'pointer' }}
          onClick={() => {
            navigate('/blogsDetail/' + id + '/' + slug);
          }}
        >
          <img src={sectionfiveImage1} width="100%" />
          <Typography sx={{ py: 1 }} variant="h3">
            Business meeting 2017 in san Fransisco
          </Typography>
          <Typography variant="body2">
            One of my favourite things I like to watch is the bloopers and outtakes that are shown of mistakes made during the making of a
            movie.
          </Typography>
        </Box>
      </Grid> */}

        {/* <Grid xs={12} sm={12} md={12} lg={12} >
    </Grid> */}
      </Grid>
      <Grid
        style={{ paddingRight: '80px' }}
        container
        sx={{
          // color: '#fff',
          // display: 'flex',
          justifyContent: 'right',
          // alignItems: { xs: 'auto', md: 'center' },
          // px: { xs: 5, md: 37 },
          py: 8,
          pt: 10
        }}
      >
        <Button
          onClick={() => {
            router.push('/blogsDetail/category');
          }}
          variant="contained"
          sx={{
            background: '#000',
            width: '113px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '500',
            borderRadius: '60px',
            '&:hover': {
              background: 'rgba(0, 0, 0, 0.8)'
            }
          }}
          disabled={false}
          size="small"
        >
          Learn More
        </Button>
      </Grid>
      {/* <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Stack>
            <Typography variant="h1" sx={{ py: 1 }}>
              {blogdetail?.title}
            </Typography>
            <Box sx={{ py: 1 }}>
              <img src={process.env.NEXT_APP_API_URL + blogdetail?.blog_img} width="100%" />
            </Box>

            <div dangerouslySetInnerHTML={{ __html: blogdetail?.content }} />
          </Stack>
         
        </Box>
      </Modal> */}
    </>
  );
}

export default Blogs;
