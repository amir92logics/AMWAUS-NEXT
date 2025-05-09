import Footer from 'components/footer';
import Header from 'components/header';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import NewSeoSection from 'sections/home/NewSeoSection';
// import { dispatch } from 'store';
// import { setIsParams } from 'store/reducers/zipcode';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';



const Statedetail = ({ params }: { params: { state: string, city: string } }) => {
    // const router = useRouter();

    const stateName = params.state; // ✅ This is fine in a server component
    const cityName = params.city; // ✅ This is fine in a server component
  const categories = [{name: 'Daycares', type: 'daycare'}, {name: 'Child Care', type: 'childcare'}, {name: 'Infant Daycares', type: 'infant-daycares'}, {name: 'Toddler Daycares', type: 'toddler-daycares'}, {name: 'In Home Daycares', type: 'in-home-daycares'}, {name: 'Preschools', type: 'preschools'}];
//   const navigateToCityDetail = (state: any) => {
//     // localStorage.setItem('params-search', 'true');
//     dispatch(setIsParams(true));

//     // router.push(`/${state.type}/${stateName.toLowerCase()}/${cityName.toLowerCase().replace(/\s+/g, '-')}`);
//   };
  function capitalizeFirstLetter(word: any) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return (
    <>
      <Header />
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12} sx={{ px: { lg: 5, xs: 2 }, background: '#fff', pt: 13, pb: 10 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Stack>
              <Typography
                variant="subheading2"
                sx={{
                  fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                  textTransform: 'capitalize',
                  pr: { md: 0, xs: 3 }
                }}
              >
              Browse Child Care Providers in {cityName?.replace('-', ' ')}, {stateName.toUpperCase()}
              </Typography>
            </Stack>
            <Grid container spacing={2} mt={4}>
                  {categories.map((state: any, index: number) => (
                    <Grid item key={index} xs={12}>
                      <Link
                                               href={state.type == 'daycare' ? process.env.PUBLIC_URL+`/${stateName.toLowerCase()}/daycares-in-${cityName.toLowerCase().replace(/\s+/g, '-')}`: process.env.PUBLIC_URL+`/${state.type}/${stateName.toLowerCase()}/${cityName.toLowerCase().replace(/\s+/g, '-')}`}
                        // onClick={() => navigateToCityDetail(state)}
                        // variant="bodytext"
                        style={{
                          color: '#000',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          lineHeight: '30px',
                  fontSize: '14px',
                }}
                      >
                        {state.name} in {capitalizeFirstLetter(cityName)}, {stateName.toUpperCase()}
                      </Link>
                    </Grid>
                  ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Grid container justifyContent={'center'} pt={5} pb={5}>
        <NewSeoSection />
      </Grid>
      <Footer />
    </>
  );
};

export default Statedetail;
