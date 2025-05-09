import { Container, Stack, Typography } from '@mui/material';
// import HomeSectionThree from 'assets/images/icons/HomeSectionThree.png';
import Col from 'assets/images/icons/Col.png';
import { Grid } from '@mui/material';

function SectionThree() {
  return (
    <Stack sx={{ px: { xs: 2 }, background: '#EFF1F3', pt: { md: '81px', xs: '30px' }, pb: 4 }}>
      <Grid container sx={{ py: 4, px: { md: 15, xs: 0 }, display: 'flex', justifyContent: 'center' }}>
        <Container>
          <Grid container>
            <Grid xs={1}></Grid>
            <Grid item xs={12} sm={12} md={5} lg={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography
                variant="subheading1"
                sx={{ py: 2, textAlign: 'left',  fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' },  }}
              >
                Our Commitment
              </Typography>
              <Typography variant="bodytext" sx={{ textAlign: {md:'justify', xs:'left'} }}>
                At ChildrenKARE, we are committed to ensuring that you have access to the best childcare options available. We take the time
                to understand your unique needs, whether you're looking for daycare centers, preschools, or afterschool programs. Our vast
                network of childcare providers has been thoroughly vetted, ensuring that they meet our rigorous standards for safety,
                quality, and professionalism.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={5} sx={{ ml: { md: 8, xs: 0 } }}>
              <img src={Col} width="100%" height="100%" />
              {/* <Box
            component="img"
            sx={{
              content: `url(${Col})`,
              width: { lg: '220px', md: '200px', sm: '155px', xs: '160px' },
              height:{lg:'220px'}
            }}
            alt="Logo"
          ></Box> */}
            </Grid>
            {/* <Grid item xs={12} sm={12} md={12} lg={2}>
         
        </Grid> */}
          </Grid>
        </Container>
      </Grid>
    </Stack>
  );
}

export default SectionThree;
