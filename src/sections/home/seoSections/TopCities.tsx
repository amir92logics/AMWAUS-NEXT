import { Box, Button } from '@mui/material';
import { Grid, Stack, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { dispatch } from 'store';
import { setIsParams } from 'store/reducers/zipcode';
// import { setShowMarketPlaceHeader } from 'store/reducers/zipcode';
import { useRouter } from 'next/navigation';

const TopCities = ({ topcities }: any) => {
  const router = useRouter();


  const handleClick = (citydata: any) => {
    // localStorage.setItem('params-search', 'true');
    dispatch(setIsParams(true));
    // dispatch(setShowMarketPlaceHeader(true))
    const abr = citydata?.state.toLowerCase();
    const daycares = citydata?.city?.replace(/\s+/g, '-').toLowerCase();
    router.push(`/${abr}/daycares-in-${daycares}`);
  };
  return (
    <Grid sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'column', xs: 'column' }, mt: { md: 0, sm: '20px', xs: '20px' } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'center', xs: 'start' }, px: 5 }}>
        <Stack>
          <Typography
            sx={{
              cursor: 'pointer',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              color: '#000',
              fontSize: { xs: '12px', md: '16px' }
            }}
          >
            Top Cities
          </Typography>
        </Stack>
        <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: { md: 'start', xs: 'start' }, flexWrap: 'wrap', mt: 2 , minHeight:'124px'}}>
          {topcities && topcities.map((citydata: any, index: number) => (
            <Stack key={index}>
              <Typography
                color="primary"
                sx={{
                  mr: '10px',
                  color: '#000',
                  fontSize: '12px',
                  fontWeight: '400',
                  textDecoration: 'underline',
                  mt: 1,
                  cursor: 'pointer'
                }}
                onClick={() => handleClick(citydata)}
              >
                {citydata.city}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Stack sx={{ mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              background: '#000',
              width: '113px',
              color: 'white',
              fontSize: '14px',
              fontWeight: '500',
              borderRadius: '60px',
              '&:hover': {
                background: 'rgba(0, 0, 0, 0.8)' // Adjust the alpha channel (0.8) as needed
              }
            }}
            onClick={() => router.push('/citydetail')}
          >
            View More
          </Button>
        </Stack>
      </Box>
     
    </Grid>
  );
};

export default TopCities;
