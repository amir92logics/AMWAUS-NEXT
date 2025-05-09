'use client';

import { Grid, Stack, Typography } from '@mui/material';
// import { useNavigate } from 'react-router';

// import logo from 'assets/images/logo/logo-white.png';
import { TextField } from '@mui/material';
import axios from 'utils/axios';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import { useState } from 'react';

import FooterBlock from './FooterBlock';
import { Box, Button, Container } from '@mui/material';

// import Insta from 'assets/images/icons/insta.png';
// import Facebook from 'assets/images/icons/facebook.png';
// import Pintrest from 'assets/images/icons/pintrest.png';
// import Twitter from 'assets/images/icons/twitter.png';
// import logo from 'assets/images/logo/white-text-logo.png';
// import { useState } from 'react';
// import axios from 'utils/axios';
// import { dispatch } from 'store';
// import { openSnackbar } from 'store/reducers/snackbar';

function Footer() {
  const [email, setEmail] = useState<any>('');
  const [isLoading, setisLoading] = useState<any>(false);
  const submit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
    } else if (!email) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please fill the required field',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: false
        })
      );
      return;
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please Enter Valid E-Mail Address',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: false
        })
      );
      return;
    }

    const data = new FormData();
    data.append('email', email);
    data.append('app', 'ChildrenKARE');
    setisLoading(true);

    axios({
      method: 'post',
      url: 'https://devian.amwaus.com/api/search/subscribe',
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        if (response.data.status == 'pass') {
          setisLoading(false);
          setEmail('');
          dispatch(
            openSnackbar({
              open: true,
              message: 'Subscribed Successfully',
              variant: 'alert',
              alert: {
                color: 'primary'
              },
              close: false
            })
          );
        } else {
          dispatch(
            openSnackbar({
              open: true,
              message: 'fail to Subscribe',
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
        setisLoading(false);
      });
  };
  return (
    <>
      <Box sx={{ bgcolor: '#F6F6F6', pb: { md: 0, xs: 2 }, px: { md: 0, xs: 3 } }}>
        <Container>
          {/* alignItems="center" justifyContent="center" */}
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7} sx={{ display:'none', mt: { md: 0, xs: 2 }, my:{lg:2, xs:0} }}>
              <Grid container justifyContent="center">
                <Grid item xs={12}>
                  <Typography variant="subheading1" sx={{ fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' }, }}>
                    Contact Us
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="bodytext">Please don’t hesitate to contact us if you have any questions.</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={5} sx={{ display: 'none' }}>
              <Stack
                sx={{
                  paddingTop: { md: 3, xs: 1 },
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: { md: 'center', sm: 'center', xs: 'flex-start' },
                  mt: { lg: 3, xs: 0 },
                  alignItems: { md: 'center', sm: 'center', xs: 'flex-start' },
                  flexWrap: 'wrap'
                }}
              >
                <Grid container sx={{ px: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Grid item xs={12} sm={6} md={6} lg={10}>
                    <Stack
                      sx={{
                        height: 81,
                        marginRight: { xs: 1, sm: 1, md: 1, lg: 1 },
                        marginLeft: { xs: 1, sm: 1, md: 2, lg: 4 },
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <TextField
                        fullWidth
                        value={email}
                        variant="standard"
                        placeholder="Enter your Email"
                        sx={{
                          background: '#fff',
                          borderRadius: '8px',
                          borderWidth: 0,
                          padding: 1,
                          pr: { md: '60px', xs: '70px' },
                          width: '100%', // Simplified width setting
                          '& .MuiInputBase-input::placeholder': { fontSize: '14px !important' },
                          '& .MuiInput-underline:before': { borderBottom: 'none !important' },
                          '& .MuiInput-underline:after': { borderBottom: 'none !important' },
                          '&:hover': {
                            '& .MuiInput-underline:before': { borderBottom: 'none !important' },
                            '& .MuiInput-underline:after': { borderBottom: 'none !important' }
                          }
                        }}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <Button
                        variant="contained"
                        sx={{
                          background: '#000',
                          width: '113px',
                          color: 'white',
                          fontSize: '14px',
                          fontWeight: '500',
                          borderRadius: '60px',
                          ml: -7,
                          // position:'absolute',
                          // right:{md:'213px', xs:'50px'},
                          padding: '11px',
                          '&:hover': {
                            background: 'rgba(0, 0, 0, 0.8)'
                          }
                        }}
                        onClick={submit}
                      >
                        {isLoading ? 'Loading...' : 'Subscribe'}
                      </Button>
                    </Stack>
                  </Grid>
                  {/* <Grid xs={4} sm={4} md={4} lg={3}>
                    <Stack sx={{ height: 81, mr: { xs: 1, sm: 1, md: 5, lg: 5 },mt:1,  alignItems: { lg: 'flex-start', xs: 'center' } }}>
                      
                    </Stack>
                  </Grid> */}
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <FooterBlock />
      </Box>
    </>
  );
}

export default Footer;
