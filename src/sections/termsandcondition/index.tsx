'use client';

import { Stack, Typography, useMediaQuery } from '@mui/material';
const bannerimage = '/assets/compresspics/terms.webp';
const aboutusmobilebg = '/assets/compresspics/termsmobile.webp';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import SecTwo from 'sections/termsandcondition/SecTwo';

function TermsAndCondition() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      
      <Stack
        sx={{
          backgroundImage: `url(${matches ? bannerimage : aboutusmobilebg})`,
          backgroundRepeat: 'no-repeat',

          backgroundSize: 'cover',

          backgroundPositionX: { sm: 'right', xs: 'auto' },
          justifyContent: 'center',
          display: 'flex',
          mt: 7
        }}
      >
        <Stack
          sx={{
            color: '#000',
            display: 'flex',
            justifyContent: 'center',
            px: { xs: 5, md: 10 },
            minHeight: { md: '340px', xs: '250px' }
          }}
        >
          <Typography
            variant="mainheading"
            sx={{
              fontSize: { lg: '40px', md: '36px', xs: '30px' },
              width: { sm: '100%', xs: '250px' }
            }}
          >
            Term & Conditions
          </Typography>
        </Stack>
      </Stack>
      <Container>
        <Stack>
          <SecTwo />
        </Stack>
      </Container>
    </>
  );
}

export default TermsAndCondition;
