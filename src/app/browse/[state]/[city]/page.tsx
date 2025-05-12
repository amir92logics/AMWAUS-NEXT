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

  interface PageProps {
  params: {
    city: string;
    state: string;
  };
}

const Statedetail = async ({ params }: PageProps) => {
    // const router = useRouter();
const { state, city } = await params;
    // const state = params.state; // ✅ This is fine in a server component
    // const city = params.city; // ✅ This is fine in a server component
  const categories = [{name: 'Daycares', type: 'daycare'}, {name: 'Child Care', type: 'childcare'}, {name: 'Infant Daycares', type: 'infant-daycares'}, {name: 'Toddler Daycares', type: 'toddler-daycares'}, {name: 'In Home Daycares', type: 'in-home-daycares'}, {name: 'Preschools', type: 'preschools'}];
//   const navigateToCityDetail = (state: any) => {
//     // localStorage.setItem('params-search', 'true');
//     dispatch(setIsParams(true));

//     // router.push(`/${state.type}/${state.toLowerCase()}/${city.toLowerCase().replace(/\s+/g, '-')}`);
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
              Browse Child Care Providers in {city?.replace('-', ' ')}, {state.toUpperCase()}
              </Typography>
            </Stack>
            <Grid container spacing={2} mt={4}>
                  {categories.map((_state: any, index: number) => (
                    <Grid item key={index} xs={12}>
                      <Link
                                               href={_state.type == 'daycare' ? process.env.PUBLIC_URL+`/${state.toLowerCase()}/daycares-in-${city.toLowerCase().replace(/\s+/g, '-')}`: process.env.PUBLIC_URL+`/${_state.type}/${state.toLowerCase()}/${city.toLowerCase().replace(/\s+/g, '-')}`}
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
                        {_state.name} in {capitalizeFirstLetter(city)}, {state.toUpperCase()}
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
