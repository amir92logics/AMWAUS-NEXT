// app/browse/[state]/page.tsx
import { Typography, Stack, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import type { Metadata } from 'next';
import axios from 'utils/axios'; // Custom axios instance
import Header from 'components/header';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';

// 👇 SSR-friendly data fetcher
async function getStateData(state: string) {
  try {
    const response = await axios.get(`api/search/get_cities/${state}`);
    return response.data.data ;
  } catch (error) {
    console.error('Failed to fetch state data:', error);
    return [];
  }
}

// 👇 Optional dynamic meta
export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
  const state = params.state?.replace('-', ' ');
  return {
    title: `Best Daycares in ${state} | ChildrenKARE`,
    description: `Find top daycares and childcare services in ${state}. Affordable, reviewed, and trusted daycare centers.`,
    alternates: {
      canonical: `http://localhost:3000/browse/${params.state}`,
    },
  };
}

// 👇 Server Component
export default async function Statedetail({ params }: { params: { state: string } }) {
  const state = params.state; // ✅ This is fine in a server component
  const data = await getStateData(state);
  return (
    <>
              <Header />
    
    <Grid container>
      <Grid item xs={12} sx={{ px: { lg: 5, xs: 2 }, background: '#fff', pt: 13, pb: 10 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Stack>
            <Typography
              variant="subheading2"
              sx={{
                fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                textTransform: 'capitalize',
                pr: { md: 0, xs: 3 },
              }}
              component="h1"
            >
              Browse in {params.state.replace('-', ' ')}
            </Typography>
          </Stack>
          <Grid container spacing={2} mt={4}>
            {data.length > 0 &&
              data.map((state: any, index: number) => (
                <Grid item key={index} xs={12} sm={6} md={2}>
                  <Link
                    href={`/browse/${state?.state_code.toLowerCase()}/${state.city.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{
                      color: '#000',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      lineHeight: '30px',
                      fontSize: '14px',
                    }}
                  >
                    {state.city}
                  </Link>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
    <NewSeoSection />
    <Footer />

    </>
  );
}