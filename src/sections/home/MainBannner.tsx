// material-ui
import {
  useEffect,
  useRef,
  // KeyboardEvent,
  useState
} from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';
import {
  Stack,
  // TextField,
  Typography,
  Slide
} from '@mui/material';
// import HomeSectionOneRightBanner from 'assets/images/icons/HomeSectionOneRightBanner.png';
// import banner1 from 'assets/images/home/banner1.png'
// import bimg from 'assets/images/home/bimg.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
// ==============================|| UNDER CONSTRUCTION ||============================== //
import banner1 from 'assets/images/home/banner1.png';

import axios from 'utils/axios';
// import SearchDayCares from 'sections/provider/SearchDayCares';
import SearchDayCares from 'sections/provider/SearchDayCaresNewDesign';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SearchNormal } from 'iconsax-react';
import checkicon from 'assets/images/home/Check1.png';
import playicon from 'assets/images/home/playicon.png';
// import stroke from 'assets/images/home/stroke.png';
import { setZipCodetest, setCentersList, setIsParams } from 'store/reducers/zipcode';
import { InputBase } from '@mui/material';
import ReactPlayer from 'react-player';
import mobilehomebg from 'assets/images/home/mobilebg.png';
import videoplayicon from 'assets/images/home/videoplayicon.png';
import stopicon from 'assets/images/home/stopicon.png';
import startsimg from 'assets/images/home/startsimg.png';
import xcircle from 'assets/images/home/x-circle.png'

function MainBanner() {
  // const theme = useTheme();
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  // const navigate = useNavigate();

  const [showMap, setshowMap] = useState<any>(localStorage.getItem('showMap') === 'true');

  const [zipCode, setZipCode] = useState<any>(null);
  // const [radius, setradius] = useState<any>(5);
  const [zipCodeValidation, setZipCodeValidation] = useState<any>(null);
  // const [radiusvalidation, setRadiusvalidation] = useState<any>(null);

  const [capacity, setcapacity] = useState<any>(false);
  const [transport, settransport] = useState<any>(false);
  const [cityName, setCityName] = useState<any>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const cleearestorage = () => {
    localStorage.setItem('showMap', 'false');
    setshowMap(false);
  };
  // const cityName = 'NewYork';
  // useEffect(() => {
  //   localStorage.setItem('showMap', showMap.toString());
  // }, [showMap]);
  const handlesearch = () => {
    var count = 0;

    if ((zipCode == null || zipCode === '') && (cityName == null || cityName === '')) {
      setZipCodeValidation('Enter Zip Code or city name');
      count += 1;
    }
    // else if (zipCode?.length != 5) {
    //   dispatch(
    //     openSnackbar({
    //       open: true,
    //       message: 'No Center Found for this zip code try another',
    //       variant: 'alert',
    //       alert: {
    //         color: 'error'
    //       },
    //       close: false
    //     })
    //   );
    // }
    else {
      setZipCodeValidation(null);
    }
    if (count > 0) {
      return;
    }
    const data = new FormData();
    data.append('zip_code', zipCode);
    data.append('miles', '12');

    axios({
      method: zipCode ? 'post' : 'get',
      url: zipCode
        ? 'api/search/get_center'
        : // `api/search/get_content/${abr}/${cityName}`
          `api/search/get_content?city_name=${cityName}`,
      data: data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then((response) => {
        // Handle the response data here
        if (response.data.status === 'pass') {
          // debugger;
          dispatch(setCentersList(response?.data?.data));
          const city = response?.data?.data?.center[0]?.city;
          const cityAbr = response?.data?.data?.geo_location?.state_code?.toLowerCase();
          const cityAbrs = response?.data?.data?.geo_location?.state_code?.toLowerCase();
          console.log(cityAbr, 'cityabr');
          const formattedCity = city ? city.replace(/\s+/g, '-').toLowerCase() : '';
          // localStorage.setItem('params-search', 'true');
          // debugger;
          dispatch(setIsParams(true));

          if (zipCode) {
            navigate(`/${cityAbr}/${formattedCity}/${zipCode}`);
            dispatch(setZipCodetest(zipCode));
          } else if (cityName) {
            navigate(`/${cityAbrs}/daycares-in-${cityName}`);
          } else {
            navigate(`/${zipCode}/daycares-in-cityNotFound`);
          }
          // ...other logic based on the response
        } else if (response.data.status === 'fail') {
          dispatch(
            openSnackbar({
              open: true,
              message: 'No Center Found for this zip code try another',
              variant: 'alert',
              alert: {
                color: 'error'
              },
              close: false
            })
          );
        }
      })
      .catch((error) => {
        // Handle errors

        console.log('Error:', error);
      });
  };
  const handleChangeSearchInput = (e: any) => {
    const input = e.target.value;
    // Check if input is purely numeric
    if (/^\d+$/.test(input)) {
      // Input is purely numeric, treat it as a zip code
      setZipCode(input);
      setCityName(''); // Clear any previously set city name
      localStorage.setItem('searchType', 'zipCode'); // Store search type as zip code in localStorage
    } else {
      // Input includes non-numeric characters, treat it as a city name
      setCityName(input);
      setZipCode(''); // Clear any previously set zip code
      localStorage.setItem('searchType', 'city'); // Store search type as city in localStorage
    }
  };

  // const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
  //   if (event.key === 'Enter') {
  //     handlesearch();
  //   }
  // };

  const handleTransport = () => {
    settransport(!transport);
  };
  const handleCapacity = () => {
    setcapacity(!capacity);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var a: any =
    "<h2>Best Daycares in Denver, CO | Find Trusted Childcares</h2>\n<div><p>In today's fast-paced world, daycare centers have become an essential support system for working parents. They provide children with a safe and nurturing environment while their parents are at work or attending to other responsibilities. But daycare isn't just about convenience; it is a vital foundation for a child's growth and development. We at <b>ChildrenKARE</b> will help you with that. We provide you with the <b>Best Daycares in Denver, Colorado</b>. Our vision is to provide quality and affordable childcare options for your kids.</p></div>\n<h2>Why Do You Need Daycare Centers in \nDenver?</h2>\n<ul>\n<li><b>Daycare Centers in Denver</b> provides educational opportunities for children, stimulating cognitive, social, and emotional development from infancy to preschool.</li>\n<li>Daycare centers allow children to develop valuable social skills such as empathy, teamwork, and communication by interacting with their peers.</li>\n<li>Daycare centers prioritize children's safety and well-being with trained staff and regulated facilities, giving parents peace of mind.</li>\n<li>Daycare centers allow parents to balance work and family life.</li></ul>\n<h2>What to Check Before Selecting Denver Daycare Centers</h2>\r\n<p>When choosing a <b>\rDenver Daycare Centers</b> for your child, consider the following factors:</p>\r\n<ul>\r\n<li>Ensure the daycare is licensed and meets state regulations for safety and quality.</li>\r\n<li>Check the experience and qualifications of the guardians.</li>\r\n<li>Inquire about the educational programs and activities offered.</li>\r\n<li>Assess the safety protocols and cleanliness of the facility.</li>\r\n<li>Read reviews and ask for references from other parents.</li></ul>\r\n<h2>Looking for Quality ChildCare \rDenver?</h2>\n<p>Are you looking for a platform to find <b>ChildCare \nDenver</b>? ChildrenKare is the right option for you. We make sure your child is safe and having a fun. We can help you to find friendly caregivers and teachers to create a fun and learning space for your child. We want your child to have a good time and learn new things.</p>\r\n<h2>Average Daycare Cost in Denver</h2>\r\n<p>The <b>Average Daycare Cost in  Denver</b> varies depending on location, type, and the child's age. On average, daycare can range from a few hundred to over a thousand dollars monthly.</p>\r\n\r\n<h2>24 hour daycare \rDenver</h2>\n<p>If you are looking for a <b>24 hour daycare Denver</b> services. You are at the right place. <b><a href=\"https://Childrenkare.com/\">ChildrenKARE</a></b> can connect you with various daycare options according to your care requirements.</p>\n";
  // var regex =a.match(/<(p[2-4])>([^<>]+)<\/\1>/g)
  let res = a.match(/<div[^>]*?>([\s\S]*?)<\/div>/g).map((val: any) => val);

  console.log(res, 'regex');

  const searchSectionRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  useEffect(() => {
    // window.scrollTo({
    //   top: 200,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    // console.log('i am running');
    setTimeout(() => {
      if (searchSectionRef.current && location.hash === '#mapsearch') {
        searchSectionRef.current.scrollIntoView({ behavior: 'smooth' } as ScrollIntoViewOptions);
      }
    }, 1000);
  }, [location]);

  return (
    <Stack>
      {/* <Stack >
              {getListOfTagsTextFromString(temp, /<(h[2-4])>([^<>]+)<\/\1>/g, /<\/?h2>/g).map((_item: any, index: any) => (
                <Stack sx={{ my: 2 }}>
                  <h2>
                    {' '}
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, my: 1 }} dangerouslySetInnerHTML={{ __html: _item }} />
                  </h2>
                  <Typography
                    sx={{ fontSize: '14px' }}
                    dangerouslySetInnerHTML={{
                      __html: getListOfTagsTextFromString(temp, /<div[^>]*?>([\s\S]*?)<\/div>/g, /<\/?div>/g)[index]
                    }}
                  />
                </Stack>
              ))}
            </Stack> */}
      {!showMap ? (
        <>
          <Stack
            sx={{
              backgroundImage: `url(${matches ? banner1 : mobilehomebg})`,
              // backgroundSize: { md: '100% 100%', xs: 'cover' },
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              minHeight: matches ? '92vh' : '900px',
              backgroundPositionX: { sm: 'right', xs: 'auto' },
              backgroundPositionY: 'center',
              height: '100%',
              justifyContent: matches ? 'center' : 'start',
              display: 'flex',
              py: 4
            }}
            id="mapsearch"
          >
            <Grid container sx={{ pt: matches ? 0 : 5 }}>
              <Grid item xs={12} sm={8} md={8} lg={12} sx={{ display: 'flex', flexDirection: 'column', px: { md: '115px', xs: 5 } }}>
                <Typography
                  variant="mainheading"
                  sx={{
                    fontSize: { lg: '50px', md: '45px', xs: '30px' },
                    letterSpacing: ' -1.75px'
                    // width: { lg: '600px', md: '575px', xs: 'auto' }
                  }}
                >
                  Find the Best <span style={{ position: 'relative', color: '#19A3E0' }}> Childcare </span> Service for you
                </Typography>
                <Stack
                  sx={{
                    background: 'rgba(83, 95, 106, 0.12)',
                    borderRadius: '10px',
                    border: '1px solid rgba(83, 95, 106, 0.35)',
                    mt: { md: '40px', xs: 4 },
                    width: { lg: '600px' }
                  }}
                >
                  <Typography
                    variant="bodytext"
                    sx={{
                      mt: 2,
                      mb: 1,
                      textAlign: { md: 'justify', xs: 'left' },
                      px: { md: 4, xs: 2 },
                      fontSize: { md: '16px', xs: '16px' },
                      fontWeight: 500
                    }}
                  >
                    Helping you navigate through the largest number of Childcare Providers in the US.
                  </Typography>
                  <Typography
                    variant="bodytext"
                    sx={{
                      mb: 2,
                      textAlign: { md: 'justify', xs: 'left' },
                      px: { md: 4, xs: 2 },
                      fontSize: { md: '16px', xs: '16px' },
                      fontWeight: 500
                    }}
                  >
                    We are using latest AI Based technology to help you identify the ideal Childcare Provider.
                  </Typography>
                </Stack>
                <Stack sx={{ position: 'relative', mt: { md: '55px', xs: 4 }, width: { lg: '512px', md: '430px', xs: 'auto' } }}>
                  <InputBase
                    sx={{
                      background: 'white',
                      outline: 'none',
                      border: 'none',
                      borderRadius: '30px',
                      height: { md: '3em', xs: '2.5em' },
                      paddingLeft: '30px',
                      fontSize: '16px',
                      '& .MuiInputBase-input::placeholder': { fontSize: { xs: '12px !important', md: '14px !important' } }
                    }}
                    id="outlined-basic"
                    placeholder="Search city or zip code"
                    inputProps={{ 'aria-label': 'search zipCode' }}
                    value={zipCode ? zipCode : cityName}
                    onChange={handleChangeSearchInput}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault(); // Prevent default behavior of the Enter key
                        handlesearch();
                      }
                    }}
                  />
                  <Typography component="p" sx={{ color: 'red', mb: 2, mt: 1, px: 2, fontSize: '16px' }}>
                    {zipCodeValidation && zipCodeValidation}
                  </Typography>

                  <Stack
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      background: '#000',
                      px: 4,
                      py: 1,
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      height: { md: '2.7em', xs: '2.3em' },
                      width: '69px',
                      borderRadius: '0 30px 30px 0'
                    }}
                    onClick={handlesearch}
                  >
                    <SearchNormal className="child-care-center" size="28" cursor={'pointer'} color="#fff" />
                  </Stack>
                </Stack>

                <Stack sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' }, ml: { md: 0, xs: 1 }, mt: { md: 4, xs: 0 } }}>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Stack>
                      <img src={checkicon} alt="checkicon" style={{ height: '24px', width: '24px' }} />
                    </Stack>
                    <Stack>
                      <Typography
                        variant="bodytext1"
                        sx={{
                          ml: 1
                        }}
                      >
                        Map Based Search
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', ml: { md: 4, xs: 0 }, mt: { md: 0, xs: 2 } }}>
                    <Stack>
                      <img src={checkicon} alt="checkicon" style={{ height: '24px', width: '24px' }} />
                    </Stack>
                    <Stack>
                      <Typography
                        variant="bodytext1"
                        sx={{
                          ml: 1
                        }}
                      >
                        Ai Guided Marketplace
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack sx={{ display: 'none', flexDirection: 'row', alignItems: 'center', mt: { md: 2, xs: 2 }, ml: { md: 0, xs: 1 } }}>
                  <Stack>
                    <img src={checkicon} alt="checkicon" style={{ height: '24px', width: '24px' }} />
                  </Stack>
                  <Stack>
                    <Typography
                      variant="bodytext1"
                      sx={{
                        ml: 1
                      }}
                    >
                      AI Guided Search
                    </Typography>
                  </Stack>
                </Stack>
                <Stack sx={{ mt: 5 }}>
                  <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Stack onClick={handleOpen}>
                      <img src={playicon} alt="playicon" style={{ height: '48px', width: '48px', cursor: 'pointer' }} />
                    </Stack>
                    <Stack onClick={handleOpen}>
                      <Typography
                        variant="bodytext1"
                        sx={{
                          ml: 1,
                          pb: '4px',
                          borderBottom: '3px solid black',
                          cursor: 'pointer'
                        }}
                      >
                        Watch Video
                      </Typography>
                    </Stack>
                  </Stack>

                  <Dialog open={open} onClose={handleClose} maxWidth="md" sx={{overflow:'hidden'}}>
                    <DialogContent>
                    <Box onClick={handleClose} sx={{position: 'absolute', right: '43px',cursor:'pointer',zIndex:1}}>
              <img src={xcircle} alt="xcicle" style={{  }}  />
              </Box>
                      <Stack
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'relative',
                          px: { md: 5, xs: 0 },
                          borderRadius: { md: '30px', xs: 0 },
                          border: '1px solid transparent',
                          overflow: 'hidden',
                          height: { xl: '582px', xs: 'auto' }
                        }}
                      >
                        <ReactPlayer
                          url={process.env.PUBLIC_URL + '/video/video1.mp4'}
                          width="100%"
                          height="auto"
                          // borderRadius="30px"
                          playing={isPlaying}
                          style={{
                            borderRadius: '10px',
                            border: '1px solid transparent'
                          }}
                        />
                        <Box sx={{ position: 'absolute', left: '10%', width: { md: '100%', xs: '100px' } }}>
                          <img src={startsimg} style={{ display: matches ? 'block' : 'none' }} alt="starsimg" />
                        </Box>
                        <Box sx={{ position: 'absolute', right: '10%', bottom: '10%' }}>
                          <img src={startsimg} style={{ display: matches ? 'block' : 'none' }} alt="starsimg" />
                        </Box>
                        <Box
                          onClick={() => setIsPlaying(!isPlaying)}
                          sx={{
                            position: 'absolute',
                            top: isPlaying ? 'auto' : '50%',
                            left: isPlaying?'auto':'50%',
                            bottom: isPlaying ? '70px' : 'auto',
                            right: isPlaying ? '70px' : 'auto',
                            transform: isPlaying ? 'none' : 'translate(-50%, -50%)',
                            transition: 'top 0.5s ease-out, left 0.5s ease-out, transform 0.5s ease-out'
                          }}
                        >
                          {isPlaying ? (
                            <>
                              <img src={stopicon} alt="stopicon" style={{ height: matches ? '77px' : '50px' }} />
                            </>
                          ) : (
                            <>
                              <img src={videoplayicon} alt="videoplayicon" style={{ height: matches ? '77px' : '50px' }} />
                            </>
                          )}
                        </Box>
                      </Stack>
                    </DialogContent>
                  </Dialog>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </>
      ) : (
        <Slide direction="up" in={showMap} mountOnEnter unmountOnExit timeout={700}>
          <Stack className="SearchDayCares">
            <SearchDayCares
              zipprop={zipCode}
              capacity={capacity}
              handleCapacity={handleCapacity}
              transport={transport}
              handleTransport={handleTransport}
              cleearestorage={cleearestorage}
            />
          </Stack>
        </Slide>
      )}
    </Stack>
  );
}

export default MainBanner;
