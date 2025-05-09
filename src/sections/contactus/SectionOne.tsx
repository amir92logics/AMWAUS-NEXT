import { Stack, Typography } from '@mui/material';
import BannerImage from 'assets/images/icons/aboutusbannerimage.png';

function SectionOne() {
  // const divStyle = {
  //   backgroundImage: `url(${BannerImage})`, // Replace with the path to your image
  //   backgroundSize: 'cover', // Adjust as needed
  //   backgroundRepeat: 'no-repeat',
  //   height: "400px"
  //   // maxWidth:"99%"
  // };
  return (
    <Stack sx={{backgroundImage: `url(${BannerImage})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover', border: '1px solid transparent', borderRadius: 4, p: 5}}>
      {/* <img src={BannerImage} style={{ height: 450 }} /> */}
      <Stack sx={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
        <Typography  sx={{ color: '#fff', py: 2, fontSize: {md: 60, xs: 20},fontWeight: '800'}}>
          Contact Us
        </Typography>
        <Typography  sx={{ color: '#fff', width: '60%', textAlign: 'center', fontSize: {md: 22,sm: 18, xs: 16},fontWeight: '600' }}>
          We'd love to hear from you and answer any questions you may have about our daycare services. Please feel free to reach out to us
          using the following contact methods.
        </Typography>
      </Stack>
    </Stack>
  );
}

export default SectionOne;
