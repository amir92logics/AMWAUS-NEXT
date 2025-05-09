import { Stack, Grid, Typography, Box } from '@mui/material';
import CheckboxIcons from 'assets/images/icons/CheckboxIcons.png';
import HomeSectionfour from 'assets/images/icons/HomeSectionfour.png';
import HomeSectionFourBannerImage from 'assets/images/icons/HomeSectionFourBannerImage.png';
import {
 
  useTheme
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
function SectionFour() {
  const theme = useTheme();
  
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  // const matchesmd = useMediaQuery(theme.breakpoints.down('md'));
  const divStyle = {
    backgroundImage: `url(${HomeSectionFourBannerImage})`,
    backgroundSize: '100% 100%', 
       backgroundRepeat: 'no-repeat', // Adjust as needed
  };
  return (
    <Stack sx={{ background: '#fff'}}>
      <Grid container sx={{ px: { xs: 5 }, py: { xs: 5,md:5 } }}  >
      <Grid xs={0} sm={0} md={1} lg={1}></Grid>
        
        <Grid xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex',flexDirection:"column",justifyContent:"center"  }}>
          {/* <Stack> */}
            <Typography 
            variant={matches?'h2':'h1'}
            >Why Choose Us</Typography>
          {/* </Stack> */}

          <Stack>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2,justifyContent:"left"}}>
              <img src={CheckboxIcons} style={{ width: '32px', height: '32px', paddingTop: 5 }} />
              <Typography 
            variant={matches?'body2':'body1'}
            sx={{ pl: 1 }}>
                {' '}
                We have a proven track record of successfully matching families with the right childcare providers.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:"left", pt: { md: 2, xs: 1 } }}>
              <img src={CheckboxIcons} style={{ width: '32px', height: '32px', paddingTop: 5 }} />
              <Typography 
            variant={matches?'body2':'body1'}
            sx={{  pl: 1 }}>
                {' '}
                Our services are personalized, ensuring that your family's unique needs are met.{' '}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:"left", pt: { md: 2, xs: 1 } }}>
              <img src={CheckboxIcons} style={{ width: '32px', height: '32px', paddingTop: 5 }} />
              <Typography
            variant={matches?'body2':'body1'}
            sx={{  pl: 1 }}>
                {' '}
                We prioritize safety, quality, and professionalism in all of our referrals.{' '}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:"left", pt: { md: 2, xs: 1 } }}>
              <img src={CheckboxIcons} style={{ width: '32px', height: '32px', paddingTop: 5 }} />
              <Typography 
            variant={matches?'body2':'body1'}
            sx={{  pl: 1 }}>
                {' '}
                We save you time and alleviate the stress of searching for childcare on your own{' '}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:"left", pt: { md: 2, xs: 1 } }}>
              <img src={CheckboxIcons} style={{ width: '32px', height: '32px', paddingTop: 5 }} />
              <Typography 
            variant={matches?'body2':'body1'}
            sx={{  pl: 1 }}>
                {' '}
                Our expert guidance and support are available to you throughout the entire process{' '}
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid xs={0} sm={0} md={1} lg={1}></Grid>

        <Grid xs={12} sm={12} md={5} lg={5} sx={{ display: 'flex',flexDirection:"column",justifyContent:"center"  }}>
            <img src={HomeSectionfour}  width="100%" height="100%" />
        </Grid>
        <Grid xs={0} sm={0} md={1} lg={1}></Grid>

      </Grid>

      <Stack style={divStyle} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: {md:4,xs:2} }}>
        <Typography 
            variant="h2"
            sx={{ color: '#ffff',textAlign: 'center',mx:{xs:5,md:10},py:{xs:5,sm:10,md:12}}}>
          {' '}
          Let us Help you Find the Perfect Childcare Solution that will give you Peace of mind and allow your child to Flourish.{' '}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default SectionFour;
