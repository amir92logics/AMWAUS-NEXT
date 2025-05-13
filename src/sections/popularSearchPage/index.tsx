"use client";

import axios from 'utils/axios';
import PapularSearchMainBanner from 'sections/home/PapularSearchMainBanner';
import { useEffect, useState } from 'react';

// ... (previous imports)

const PapularSearchDeatil = ({searchname}: any) => {

  const [papularSearchData, setPapularSearchData] = useState([] as any);
  const [heading, setHeading] = useState('');
  const [loading, setLoading] = useState(true);

  const handleTopSearch = () => {
    axios({
      method: 'get',
      url: `api/search/popular_key/${searchname}`,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        console.log('response............searchname', response.data);

        // Check if the response has the expected structure
        if (response.data && response.data.data && response.data.data.length > 0) {
          setPapularSearchData(response.data.data);
          setHeading(response.data.data[0].heading); // Assuming you want the heading from the first item
        } else {
          console.error('Invalid API response format or empty data array');
          // Handle the case where the API response is not as expected or the data array is empty
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        // Handle the error
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleTopSearch();
  }, [searchname]);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <PapularSearchMainBanner heading={heading} description={papularSearchData.length > 0 ? papularSearchData[0].tagline : ''} />
      )}
    </div>
  );
};

export default PapularSearchDeatil;
