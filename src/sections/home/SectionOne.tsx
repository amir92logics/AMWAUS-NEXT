import { Box, Grid, Stack, Typography } from '@mui/material';
import Accepts from 'assets/images/icons/HomeSectionOne.png';
import Research from 'assets/images/icons/Research.png';
import Consulting from 'assets/images/icons/Consulting.png';
import Gidence from 'assets/images/icons/Gidence.png';
import Peaceofmind from 'assets/images/icons/Peaceofmind.png';

function SectionOne() {
  return (
    <Stack sx={{ background: '#fff', px: { xs: 5 } }}>
      <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', py: 8, mt: 6 }}>
        <img src={Accepts} style={{ height: '80px', width: '96px', opacity: '30%', marginTop: -80 }} />
        <Typography variant='h3'
          sx={{ width: { md: '50%' }, textAlign: { sm: 'left' }, ml: -3 }}
        >
          We understand that your child's well-being is your top priority. It's ours too
        </Typography>
      </Stack>
      <Grid container  >
        <Grid xs={12} sm={6} md={3} lg={3} sx={{ px: 1, mt: { xs: 2 } }}>
          <Box sx={{ background: '#EEF7FB', p: 4, minHeight: { xs: 'auto', sm: 330, md: 430, lg: 330 }, borderRadius: 2 }}>
            <img src={Research} style={{ paddingBottom: 10 }} />
            <Typography variant='h4' sx={{ pb: 1 }}>Customized Search</Typography>
            <Typography variant='body2'>
              Based on your criteria, we'll conduct a tailored search through our extensive database of childcare providers. We'll present
              you with options that best match your family's unique requirements.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={3} sx={{ px: 1, mt: { xs: 2 } }}>
          <Box sx={{ background: '#EEF7FB', p: 3, minHeight: { xs: 'auto', sm: 330, md: 430, lg: 330 }, borderRadius: 2 }}>
            <img src={Consulting} style={{ paddingBottom: 10 }} />
            <Typography variant='h4' sx={{ pb: 1 }}>
              Quality & Authentic Data
            </Typography>
            <Typography variant='body2'>
              Our dedicated team validate every detail, ensuring transparency that empowers you to make decisions
              with ease and confidence because we are committed to provide the best childcare options to your
              family
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={3} sx={{ px: 1, mt: { xs: 2 } }}>
          <Box sx={{ background: '#EEF7FB', p: 3, minHeight: { xs: 'auto', sm: 330, md: 430, lg: 330 }, borderRadius: 2 }}>
            <img src={Gidence} style={{ paddingBottom: 10 }} />
            <Typography variant='h4' sx={{ pb: 1 }}>
              Guidance & Support
            </Typography>
            <Typography variant='body2'>
              We're here to answer your questions, provide advice, and offer support throughout the decision-making process. We'll help you
              arrange visits, interviews, and consultations with potential childcare providers.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={3} sx={{ px: 1, mt: { xs: 2 } }}>
          <Box sx={{ background: '#EEF7FB', p: 3, minHeight: { xs: 'auto', sm: 330, md: 430, lg: 330 }, borderRadius: 2 }}>
            <img src={Peaceofmind} style={{ paddingBottom: 10 }} />
            <Typography variant='h4' sx={{ pb: 1 }}>
              Peace of Mind
            </Typography>
            <Typography variant='body2'>
              Our goal is to give you peace of mind knowing that your child is in a safe, nurturing, and enriching environment. We'll guide
              you through the enrollment process, helping you understand fees, policies, and any available financial assistance
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default SectionOne;
