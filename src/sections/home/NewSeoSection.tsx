'use client';


import { Grid } from '@mui/material';
import TopStates from './seoSections/TopStates';
import TopCities from './seoSections/TopCities';
import PapularSearches from './seoSections/PapularSearches';
// import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'utils/axios';
import NearByZipcode from './seoSections/NearByZipcode';
import { useParams } from 'next/navigation';
import { Container } from '@mui/material';
import { usePathname } from 'next/navigation';


interface seoProps {
  isCity?: any;
}
const NewSeoSection = ({ isCity}: seoProps) => {
  const { abr } = useParams();
  const [topCities, setTopCities] = useState([]);
  const [topStates, setTopStates] = useState([]);
  const [topSearches, setTopSearches] = useState([]);
  // const location = useLocation();
  const pathname = usePathname();

  const isCityDetailPage =
    pathname === '/states' || pathname.startsWith('/Statedetail/') || pathname.startsWith('/citydetail');

  const isStateDetailPage = pathname.startsWith('/daycaredetail/') || pathname.includes(`${abr}`);


  const handleTopSearch = () => {
    axios({
      method: 'get',
      url: 'api/search/top_searches',
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        setTopCities(response.data?.data?.topCities);
        setTopStates(response.data?.data?.topStates);
        setTopSearches(response.data?.data?.popularSearches);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  useEffect(() => {
    handleTopSearch();
  }, []);
  return (
    <>
      <Grid sx={{ background: '#fff', pl: 2, display: 'flex', justifyContent: 'center' }} container>
        <Container>
          <Grid
            container
            spacing={3}
            sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 }, background: 'rgba(192, 191, 191, 0.44)', borderRadius: '20px', py: 5 }}
          >
            <Grid item xs={12} sx={{ pl: 0 }}>
              <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                <Grid
                  item
                  lg={isStateDetailPage ? 4 : 4}
                  md={isStateDetailPage ? 4 : 4}
                  sm={12}
                  xs={12}
                  sx={{ display: isCityDetailPage ? 'none' : 'block' }}
                >
                  <TopStates topState={topStates} />
                </Grid>

                {!isCity && (
                  <Grid item lg={isStateDetailPage ? 4 : 4} md={isStateDetailPage ? 4 : 4} sm={12} xs={12} sx={{}}>
                    <TopCities topcities={topCities} />
                  </Grid>
                )}

                {isCity && (
                  <Grid
                    item
                    lg={isStateDetailPage ? 4 : 4}
                    md={isStateDetailPage ? 4 : 4}
                    sm={12}
                    xs={12}
                    sx={{ display: isStateDetailPage ? 'block' : 'none' }}
                  >
                    <NearByZipcode />
                  </Grid>
                )}
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', pl: 0 }}>
              <PapularSearches topsearches={topSearches} />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default NewSeoSection;

