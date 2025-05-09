import { Container } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Box, Grid, Stack, Typography } from '@mui/material';
// import mapserachimg from 'assets/images/home/mapsearchimg.png';
import childrenmarketplace from 'assets/images/home/updated1.png';
import mapbasednew from 'assets/images/home/mapbasednew.png';
// import marketsec3 from 'assets/images/home/marketsec3.png';
import hand from 'assets/images/home/hand.png';
import marketplacesidebar from 'assets/images/home/marketplacesidebar.png';
import detaildaycare from 'assets/images/home/detaildaycare.png';
import check1 from 'assets/images/home/Check1.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import marketplacepopup from 'assets/images/home/marketplacepopup.png';
import marketplacepopup2 from 'assets/images/home/marketplacepopup2.png';
import mobileframe1 from 'assets/images/home/mobileframe1.png';
import mobileframe2 from 'assets/images/home/mobileframe2.png';
import mobileframe3 from 'assets/images/home/mobileframe3.png';
import mobileframe4 from 'assets/images/home/mobileframe4.png';
import mobileframe5 from 'assets/images/home/mobilemapframe.png';

import {
  // createTheme,
  useTheme
} from '@mui/material/styles';

function UpdatedSecOne() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      {!matches && (
        <>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              pt: { md: '59px', xs: 5 },
              pb: 7,
              px: 2,
              background: '#fff'
            }}
          >
            <Typography
              variant="subheading1"
              sx={{
                fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' },
                textAlign: 'center',
                color: '#000'
              }}
            >
              2 Unique & Different Ways to Find the Best Match
            </Typography>
          </Stack>
        </>
      )}
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#000',
          position: 'relative'
        }}
      >
        <Container>
          <Stack
            sx={{
              display: { lg: 'flex', xs: 'none' },
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              mt: { md: '72px', xs: 3 }
            }}
          >
            <Typography
              variant="subheading1"
              sx={{
                fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' },
                textAlign: 'center',
                color: 'white'
              }}
            >
              2 Unique & Different Ways to Find the Best Match
            </Typography>
          </Stack>

          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: { lg: 'row', xs: 'column-reverse' },

              alignItems: 'center',
              mt: { lg: '61px', xs: '40px' },
              py: { lg: 5, xs: 0 },
              px: 2
            }}
          >
            <Grid item lg={7} xs={12}>
              {matches ? (
                <Stack
                  sx={{
                    mt: { xs: '31px' },
                    backgroundImage: `url(${childrenmarketplace})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    minHeight: { lg: '487px', xs: '100%' },
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                  }}
                >
                  <img
                    src={marketplacepopup}
                    alt="childrenmarketplace"
                    style={{
                      height: matches ? '325px' : '100%',
                      width: matches ? '473px' : '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Stack>
              ) : (
                <Stack
                  sx={{
                    mt: { xs: '31px' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                  }}
                >
                  <img
                    src={mobileframe1}
                    alt="childrenmarketplace"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Stack>
              )}
            </Grid>
            <Grid item lg={4.5} xs={12} sx={{ pl: { lg: '50px', xs: '0px' } }}>
              <Box sx={{ px: 0 }}>
                <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'left', xs: 'left' } }}>
                  <Typography
                    variant="subheading2"
                    sx={{
                      fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                      pb: 1,
                      textAlign: { md: 'left', xs: 'left' },
                      color: 'white'
                    }}
                  >
                    Childcare Marketplace
                  </Typography>
                  <Typography
                    variant="bodytext"
                    sx={{
                      pt: '15px',
                      color: 'white'
                    }}
                  >
                    ChildrenKare Marketplace will enable local providers to bid for your childcare need. We will negotiate on your behalf
                    based on market analysis and AI based matching algorithms.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: { lg: 'row', xs: 'column-reverse' },
              alignItems: 'center',
              mt: { lg: '61px', xs: '20px' },
              py: { lg: 5, xs: 0 },
              px: 2,
              position: 'relative'
            }}
          >
            <Grid item lg={7} xs={12} sx={{ position: 'relative' }}>
              {matches ? (
                <Stack
                  sx={{
                    mt: {
                      xs: '31px',
                      mt: { xs: '31px' },
                      backgroundImage: `url(${childrenmarketplace})`,
                      // backgroundSize: { md: '100% 100%', xs: 'cover' },
                      backgroundSize: '100% 100%',
                      backgroundRepeat: 'no-repeat',
                      minHeight: '487px',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      // alignItems: 'center',
                      flexDirection: 'row'
                    }
                  }}
                >
                  <AnimationOnScroll animateIn={matches ? 'animate__animated animate__delay-0.75s animate__backInUp' : 'none'}>
                    <img
                      src={marketplacepopup2}
                      alt="childrenmarketplace"
                      style={{
                        height: matches ? '490px' : '100%',
                        width: matches ? '600px' : '100%',
                        objectFit: 'contain',
                        marginTop: '-80px'
                      }}
                    />
                  </AnimationOnScroll>
                </Stack>
              ) : (
                <Stack
                  sx={{
                    mt: {
                      xs: '31px',
                      mt: { xs: '31px' },

                      display: 'flex',
                      justifyContent: 'center',
                      // alignItems: 'center',
                      flexDirection: 'row'
                    }
                  }}
                >
                  <img
                    src={mobileframe2}
                    alt="childrenmarketplace"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Stack>
              )}
            </Grid>
            <Grid item lg={4.5} xs={12} sx={{ pl: { lg: '50px', xs: '0px' } }}>
              <Box sx={{ px: 0 }}>
                <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'left', xs: 'left' } }}>
                  <Typography
                    variant="subheading2"
                    sx={{
                      fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                      pb: 1,
                      textAlign: { md: 'left', xs: 'left' },
                      color: 'white',
                      display: { lg: 'block', xs: 'none' }
                    }}
                  >
                    Childcare Marketplace
                  </Typography>
                  <Typography
                    variant="bodytext"
                    sx={{
                      pt: { lg: '42px', xs: 0 },
                      fontSize: '18px',
                      color: '#ED5B09'
                    }}
                  >
                    So what will this benefit you?
                  </Typography>

                  <Typography
                    variant="bodytext"
                    sx={{
                      pt: '25px',
                      color: 'white'
                    }}
                  >
                    In Marketplace you can search for the best childcare center for your children as per your requirement. In this you don't
                    need to search much, Just fill form the your child requirement, after According to your requirement, Your inquiry will
                    go to the center.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: { lg: 'flex', xs: 'none' },
              flexDirection: 'row',

              alignItems: 'center',
              mt: { md: '61px', xs: '40px' },
              py: 5,
              px: 2,
              position: 'relative'
            }}
          >
            <Grid
              item
              md={7}
              xs={12}
              sx={{
                mt: {
                  xs: '31px',
                  mt: { xs: '31px' },
                  position: 'relative',
                  backgroundImage: `url(${childrenmarketplace})`,
                  // backgroundSize: { md: '100% 100%', xs: 'cover' },
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '487px',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  // alignItems: 'center',
                  flexDirection: 'row'
                }
              }}
            >
              <img
                src={marketplacepopup2}
                alt="childrenmarketplace"
                style={{
                  height: matches ? '490px' : '100%',
                  width: matches ? '600px' : '100%',
                  objectFit: 'contain',
                  marginTop: '-80px'
                }}
              />

              <Stack sx={{ mt: { position: 'absolute', top: '236px', left: '288px' } }}>
                <AnimationOnScroll animateIn={matches ? 'animate__animated animate__delay-0.75s animate__backInUp' : ''}>
                  <img
                    src={hand}
                    alt="childrenmarketplace"
                    style={{
                      height: matches ? '100%' : '100%',
                      width: matches ? '100%' : '100%',
                      objectFit: 'cover'
                    }}
                  />
                </AnimationOnScroll>
              </Stack>
            </Grid>
            <Grid item md={4.5} xs={12} sx={{ pl: '50px' }}>
              <Box sx={{ px: 0 }}>
                <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'left', xs: 'left' } }}>
                  <Typography
                    variant="subheading2"
                    sx={{
                      fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                      pb: 1,
                      textAlign: { md: 'left', xs: 'left' },
                      color: 'white'
                    }}
                  >
                    Childcare Marketplace
                  </Typography>
                  <Typography
                    variant="bodytext"
                    sx={{
                      pt: { lg: '42px', xs: 0 },
                      fontSize: '18px',
                      color: '#ED5B09'
                    }}
                  >
                    So what will this benefit you?
                  </Typography>
                  <Typography
                    variant="bodytext"
                    sx={{
                      pt: '15px',
                      color: 'white'
                    }}
                  >
                    In Marketplace you can search for the best childcare center for your children as per your requirement. In this you don't
                    need to search much, Just fill form the your child requirement, after According to your requirement, Your inquiry will
                    go to the center.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: { lg: 'row', xs: 'column-reverse' },
              alignItems: 'center',
              mt: { lg: '272px', xs: '40px' },
              py: { lg: 5, xs: 0 },
              px: 2,
              position: 'relative'
            }}
          >
            <Grid item lg={7} xs={12} sx={{ position: 'relative' }}>
              {matches ? (
                <>
                  <Stack sx={{ mt: { xs: '31px' } }}>
                    <img
                      src={childrenmarketplace}
                      alt="childrenmarketplace"
                      style={{
                        height: matches ? '100%' : '100%',
                        width: matches ? '100%' : '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Stack>
                  <Stack sx={{ mt: { position: 'absolute', top: '0px', left: '0px' } }}>
                    <AnimationOnScroll animateIn="animate__animated animate__delay-0.75s animate__backInUp">
                      <img
                        src={marketplacesidebar}
                        alt="childrenmarketplace"
                        style={{
                          height: matches ? '520px' : '100%',
                          width: matches ? '100%' : '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </AnimationOnScroll>
                  </Stack>
                </>
              ) : (
                <Stack sx={{ mt: { xs: '31px' } }}>
                  <img
                    src={mobileframe3}
                    alt="childrenmarketplace"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Stack>
              )}
            </Grid>
            <Grid item lg={4.5} xs={12} sx={{ pl: { lg: '50px', xs: '0px' } }}>
              <Box sx={{ px: 0 }}>
                <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'left', xs: 'left' } }}>
                  <Typography
                    variant="subheading2"
                    sx={{
                      fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                      pb: 1,
                      textAlign: { md: 'left', xs: 'left' },
                      color: 'white',
                      display: { lg: 'block', xs: 'none' }
                    }}
                  >
                    Childcare Marketplace
                  </Typography>
                  <Typography
                    variant="bodytext"
                    sx={{
                      pt: { lg: '42px', xs: 0 },
                      fontSize: '18px',
                      color: '#ED5B09'
                    }}
                  >
                    See List According to Date
                  </Typography>

                  <Typography
                    variant="bodytext"
                    sx={{
                      pt: '25px',
                      color: 'white'
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aliquam tincidunt mauris eu risus Vestibulum auctor dapibus
                    neque.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: { lg: 'row', xs: 'column-reverse' },

              alignItems: { md: 'center', sm: 'center', xs: 'left' },
              mt: { lg: '152px', xs: '40px' },
              py: { lg: 5, xs: 0 },
              px: 2,
              position: 'relative'
            }}
          >
            <Grid item lg={7} xs={12} sx={{ position: 'relative' }}>
              {matches ? (
                <>
                  <Stack sx={{ mt: { xs: '31px' } }}>
                    <img
                      src={childrenmarketplace}
                      alt="childrenmarketplace"
                      style={{
                        height: matches ? '100%' : '100%',
                        width: matches ? '100%' : '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Stack>
                  <Stack sx={{ mt: { position: 'absolute', top: '0px', right: '0px' } }}>
                    <AnimationOnScroll animateIn="animate__animated animate__delay-0.75s animate__backInUp">
                      <img
                        src={detaildaycare}
                        alt="childrenmarketplace"
                        style={{
                          height: matches ? '520px' : '100%',
                          width: matches ? '100%' : '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </AnimationOnScroll>
                  </Stack>
                </>
              ) : (
                <Stack sx={{ mt: { xs: '31px' } }}>
                  <img
                    src={mobileframe4}
                    alt="childrenmarketplace"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Stack>
              )}
            </Grid>
            <Grid item lg={4.5} xs={12} sx={{ pl: { lg: '50px', xs: '0px' } }}>
              <Box sx={{ px: 0 }}>
                <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'left', xs: 'left' } }}>
                  <Typography
                    variant="subheading2"
                    sx={{
                      fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                      pb: 1,
                      textAlign: { md: 'left', xs: 'left' },
                      color: 'white',
                      display: { lg: 'block', xs: 'none' }
                    }}
                  >
                    Childcare Marketplace
                  </Typography>
                  <Typography
                    variant="bodytext"
                    sx={{
                      pt: { lg: '42px', xs: 0 },
                      fontSize: '18px',
                      color: '#ED5B09'
                    }}
                  >
                    Check Center Details
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                    <Stack>
                      {/* <AnimationOnScroll
                        animateIn={matches ? 'animate__animated animate__delay-0s animate__backInUp' : 'animate__delay-0s'}
                      > */}
                      <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={check1} style={{ height: '16px', width: '16px' }} />
                        <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                          Direction
                        </Typography>
                      </Stack>
                      <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 }}>
                        <img src={check1} style={{ height: '16px', width: '16px' }} />
                        <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                          License Number
                        </Typography>
                      </Stack>
                      <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 }}>
                        <img src={check1} style={{ height: '16px', width: '16px' }} />
                        <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                          Capacity
                        </Typography>
                      </Stack>
                      <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 }}>
                        <img src={check1} style={{ height: '16px', width: '16px' }} />
                        <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                          Operating Hours
                        </Typography>
                      </Stack>
                      {/* </AnimationOnScroll> */}
                    </Stack>
                    <Stack sx={{ ml: '37px' }}>
                      {/* <AnimationOnScroll
                        animateIn={matches ? 'animate__animated animate__delay-0s animate__backInUp' : 'animate__delay-0s'}
                      > */}
                      <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={check1} style={{ height: '16px', width: '16px' }} />
                        <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                          Phone Number
                        </Typography>
                      </Stack>
                      <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 }}>
                        <img src={check1} style={{ height: '16px', width: '16px' }} />
                        <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                          Age Serving
                        </Typography>
                      </Stack>
                      <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 }}>
                        <img src={check1} style={{ height: '16px', width: '16px' }} />
                        <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                          Head Start
                        </Typography>
                      </Stack>
                      <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 }}>
                        <img src={check1} style={{ height: '16px', width: '16px' }} />
                        <Typography variant={matches ? 'bodytext1' : 'bodytext'} sx={{ color: '#fff', ml: 1, fontWeight: '400' }}>
                          Early Head Start
                        </Typography>
                      </Stack>
                      {/* </AnimationOnScroll> */}
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: 'flex',
              flexDirection: { lg: 'row', xs: 'column-reverse' },
              alignItems: 'center',
              mt: { lg: '152px', xs: '40px' },
              py: { lg: 5, xs: 0 },
              px: 2,
              position: 'relative'
            }}
          >
            <Grid item lg={7} xs={12} sx={{ position: 'relative' }}>
              {matches ? (
                <>
                  <Stack sx={{ mt: { xs: '31px' } }}>
                    <img
                      src={childrenmarketplace}
                      alt="childrenmarketplace"
                      style={{
                        height: matches ? '100%' : '100%',
                        width: matches ? '100%' : '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Stack>
                  <Stack sx={{ mt: { position: 'absolute', top: '0px', right: '0px' } }}>
                    {/* <AnimationOnScroll animateIn="animate__animated animate__delay-0s animate__backInUp"> */}
                    <img
                      src={detaildaycare}
                      alt="childrenmarketplace"
                      style={{
                        height: matches ? '520px' : '100%',
                        width: matches ? '100%' : '100%',
                        objectFit: 'cover'
                      }}
                    />
                    {/* </AnimationOnScroll> */}
                  </Stack>
                </>
              ) : (
                <Stack sx={{ mt: { xs: '31px' } }}>
                  <img
                    src={mobileframe4}
                    alt="childrenmarketplace"
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Stack>
              )}
            </Grid>
            <Grid item lg={4.5} xs={12} sx={{ pl: { lg: '50px', xs: '0px' } }}>
              <Box sx={{ px: 0 }}>
                <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'left', xs: 'left' } }}>
                  <Typography
                    variant="subheading2"
                    sx={{
                      fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                      pb: 1,
                      textAlign: { md: 'left', xs: 'left' },
                      color: 'white',
                      display: { lg: 'block', xs: 'none' }
                    }}
                  >
                    Childcare Marketplace
                  </Typography>
                  <Typography
                    variant="bodytext"
                    sx={{
                      pt: { lg: '42px', xs: 0 },
                      fontSize: '18px',
                      color: '#ED5B09'
                    }}
                  >
                    Do you just want to see the details?
                  </Typography>
                  <Typography
                    variant="bodytext"
                    sx={{
                      pt: '15px',
                      color: 'white'
                    }}
                  >
                    {matches ? (
                      <AnimationOnScroll animateIn="animate__animated animate__delay-0.3s animate__backInUp">
                        If do you just want to see the details and don't want to use the marketplace, click the button and use the basic
                        search.
                      </AnimationOnScroll>
                    ) : (
                      "If do you just want to see the details and don't want to use the marketplace, click the button and use the basic search."
                    )}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <AnimationOnScroll animateIn={matches ? 'animate__animated animate__delay-0s animate__backInLeft' : 'animate__delay-0s'}>
            <Grid
              container
              sx={{
                display: 'flex',
                flexDirection: 'row',

                alignItems: 'center',
                mt: { md: '81px', xs: '40px' },
                py: 5,
                px: 2
              }}
            >
              <Grid item lg={5} xs={12} sx={{}}>
                <Box sx={{ px: 0 }}>
                  <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'left', xs: 'left' } }}>
                    <Typography
                      variant="subheading2"
                      sx={{
                        fontSize: { lg: '32px', md: '28px', sm: '24px', xs: '22px' },
                        pb: 1,
                        textAlign: { md: 'left', xs: 'left' },
                        color: 'white'
                      }}
                    >
                      Map Based Search
                    </Typography>
                    <Typography
                      variant="bodytext"
                      sx={{
                        pt: '15px',
                        color: 'white'
                      }}
                    >
                      Simple Map Based Search to Find the Care nearest to you
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid item lg={7} md={5.5} sm={7.3} xs={12} sx={{ margin: 'auto' }}>
                <Stack sx={{ mt: { xs: '31px' } }}>
                  <img
                    src={matches ? mapbasednew : mobileframe5}
                    alt="childrenmarketplace"
                    style={{
                      height: matches ? '100%' : '100%',
                      width: matches ? '100%' : '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </AnimationOnScroll>
        </Container>
      </Grid>
    </>
  );
}

export default UpdatedSecOne;
