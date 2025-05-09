'use client';
// material-ui
import { styled } from '@mui/material/styles';
import { Box, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';

// project-imports
// import logo from 'assets/images/home/logo.png';
// import Insta from 'assets/images/home/Instagram.png';
// import Facebook from 'assets/images/home/Facebook.png';
// import Pintrest from 'assets/images/home/Pinterest.png';
// import Twitter from 'assets/images/home/twitterx.png';
import { Tooltip } from '@mui/material';
import SeoCategories1 from 'sections/home/seoCategories1';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
// assets

// link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover, &:active': {
    color: theme.palette.primary.main
  }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterBlock = () => {
  const router = useRouter();
  // const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const redirectToHome = () => {
    scrollToTop();
    router.push('/'); // Change '/home' to the actual route of your home page
  };

  return (
    <>
      <Box
        sx={{
          pt: { lg: 5, xs: 1 },
          pb: 10,
          // borderTop: `1px solid ${theme.palette.divider}`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}
      >
        
        <Container>
        < SeoCategories1/>
        <Divider sx={{mt: 2}} />
          <Grid container spacing={2} sx={{ pt: { lg: 3, xs: 5 } }}>
            <Grid item xs={12} md={4} sx={{ px: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <div
      onClick={() => router.push('/')}
      style={{ cursor: 'pointer' }}
    >
      <Image
      width={210}
      height={40} 
        src="/assets/images/home/logo.png"
        alt="Logo"
        // fill
        style={{ objectFit: 'contain' }}
      />
    </div>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
                    ChildrenKARE is a Denver Colorado based company. We have been in childcare business for over 15 years specializing in
                    providing services to childcare providers and parents.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={{ xs: 5, md: 2 }} sx={{ px: 0 }}>
                <Grid item xs={6} sm={3}>
                  <Stack spacing={3}>
                    <Typography variant="bodytext1">Company</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink variant="bodytext" sx={{ cursor: 'pointer' }} onClick={redirectToHome}>
                        Home
                      </FooterLink>
                      <FooterLink
                        variant="bodytext"
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                          router.push('/aboutus');
                        }}
                      >
                        About Us
                      </FooterLink>
                      <FooterLink
                        variant="bodytext"
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                          router.push('/blogs');
                        }}
                      >
                        Blogs
                      </FooterLink>
                      <FooterLink
                        variant="bodytext"
                        sx={{ cursor: 'pointer', display: { lg: 'none', xs: 'block' } }}
                        onClick={() => {
                          router.push('/contactus');
                        }}
                      >
                        Contact Us
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={3} sx={{ display: { sm: 'block', xs: 'none' } }}>
                  <Stack spacing={3}>
                    <Typography variant="bodytext1">Help & Support</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink
                        variant="bodytext"
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                          router.push('/contactus');
                        }}
                      >
                        Contact Us
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Stack spacing={3}>
                    <Typography variant="bodytext1">Legal Resources</Typography>
                    <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                      <FooterLink variant="bodytext" sx={{ cursor: 'pointer' }} onClick={() => router.push('/termsandcondition')}>
                        Terms & Condition
                      </FooterLink>
                      <FooterLink variant="bodytext" sx={{ cursor: 'pointer' }} onClick={() => router.push('/privacypolicy')}>
                        Privacy Policy
                      </FooterLink>
                      <FooterLink variant="bodytext" sx={{ cursor: 'pointer' }} href="/#faqs">
                        FAQ
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Stack display="flex" sx={{ flexDirection: { md: 'row', sm: 'row', xs: 'row' } }}>
                    <Stack sx={{ mr: { md: 1, xs: 1 }, mt: { md: 0, xs: 1 } }}>
                      <Tooltip title={'Instagram'}>
                        <a href="https://www.instagram.com/children.kare/" target="_blank">
                          <Image alt="Instagram" src='/assets/images/home/Instagram.png' width={30} height={30} />
                        </a>
                      </Tooltip>
                    </Stack>
                    <Stack sx={{ mr: { md: 1, xs: 1 }, mt: { md: 0, xs: 1 } }}>
                      <Tooltip title={'Facebook'}>
                        <a href="https://www.facebook.com/children.kare0/" target="_blank">
                          <Image alt="Facebook" src='/assets/images/home/Facebook.png' width={30} height={30} />
                        </a>
                      </Tooltip>
                    </Stack>
                    <Stack sx={{ mr: { md: 1, xs: 1 }, mt: { md: 0, xs: 1 } }}>
                      <Tooltip title={'Twitter'}>
                        <a href="https://twitter.com/children_kare" target="_blank">
                          <Image alt="Twitter" src='/assets/images/home/twitterx.png' width={40} height={30} />
                        </a>
                      </Tooltip>
                    </Stack>
                    <Stack sx={{ mr: { md: 1, xs: 1 }, mt: { md: 0, xs: 1 } }}>
                      <Tooltip title={'Pinterest'}>
                        <a href="https://www.pinterest.com/childrenkare/" target="_blank">
                          <Image alt="Pintrest" src='/assets/images/home/Pinterest.png' width={30} height={30}  />
                        </a>
                      </Tooltip>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default FooterBlock;
