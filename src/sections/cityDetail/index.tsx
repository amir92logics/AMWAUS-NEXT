"use client";

import { useEffect, useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Stack } from '@mui/material';
import axios from 'utils/axios';
import { dispatch } from 'store';
import { setIsParams } from 'store/reducers/zipcode';
import { useRouter } from 'next/navigation';

interface ExpandedStates {
  [key: number]: boolean;
}

const CityDetail = () => {
  const [cityDetail, setCityDetail] = useState([]);
  const router = useRouter();

  const handleGetCityGroup = () => {
    axios({
      method: 'get',
      url: 'api/search/get_city_group',
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        console.log('response.handleGetCityGroup', response.data.data);
        setCityDetail(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  useEffect(() => {
    handleGetCityGroup();
  }, []);

  const [expandedStates, setExpandedStates] = useState<ExpandedStates>([]);

  const handleViewMoreClick = (id: number) => {
    setExpandedStates((prevExpandedStates) => ({
      ...prevExpandedStates,
      [id]: !prevExpandedStates[id]
    }));
  };
  const handleShowLessClick = (id: number) => {
    setExpandedStates((prevExpandedStates) => ({
      ...prevExpandedStates,
      [id]: false
    }));
  };

  const navigateToCityDetail = (state: any, city: any) => {
    dispatch(setIsParams(true));
    const stateParam = state.replace(/\s+/g, '-').toLowerCase();
    const cityParam = city.replace(/\s+/g, '-').toLowerCase();
    router.push(`/${stateParam}/daycares-in-${cityParam}`);
  };

  return (
      <Grid container xs={12} sm={12} md={12} lg={12} sx={{ px: { lg: 5, xs: 2 }, background: '#fff', pt: 13, pb: 10 }}>
        {cityDetail.map((item: any, id) => (
          <Grid item xs={12} key={id}>
            <Typography
              sx={{
                cursor: 'pointer',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                color: '#000',
                fontSize: { xs: '12px', md: '16px' }
              }}
            >
              {item.state}
            </Typography>
            <Grid container spacing={1}>
              {(expandedStates[id] ? item.cities : item.cities.slice(0, 30)).map((city: any, index: any) => (
                <Grid item key={index} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', mt: 2 }}>
                  <Typography
                    color="primary"
                    sx={{
                      mr: '10px',
                      color: '#000',
                      fontSize: '12px',
                      fontWeight: '400',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      lineHeight: '30px'
                    }}
                    onClick={() => {
                      navigateToCityDetail(item.state_code, city.city);
                      console.log(item, city, '/???????????????????????');
                    }}
                  >
                    {city.city}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            {!expandedStates[id] && item.cities.length > 30 && (
              <Stack sx={{ display: 'block', textAlign: 'end', mt: '30px', mb: '30px' }}>
                <Button
                  variant="contained"
                  sx={{
                    px: 3,
                    py: 1,
                    background: '#000',
                    borderRadius: '60px',
                    '&:hover': {
                      background: 'rgba(0, 0, 0, 0.8)' // Adjust the alpha channel (0.8) as needed
                    }
                  }}
                  onClick={() => handleViewMoreClick(id)}
                >
                  View More
                </Button>
              </Stack>
            )}
            {expandedStates[id] && (
              <Stack sx={{ display: 'block', textAlign: 'end', mt: '30px', mb: '30px' }}>
                <Button
                  variant="contained"
                  sx={{
                    px: 3,
                    py: 1,
                    background: '#000',
                    borderRadius: '60px',
                    '&:hover': {
                      background: 'rgba(0, 0, 0, 0.8)' // Adjust the alpha channel (0.8) as needed
                    }
                  }}
                  onClick={() => handleShowLessClick(id)}
                >
                  Show Less
                </Button>
              </Stack>
            )}
          </Grid>
        ))}
      </Grid>
  );
};

export default CityDetail;
