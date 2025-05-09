'use client';

import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
// import videodummy from 'assets/images/home/videodummyimg.png';
// import ReactPlayer from 'react-player';
// import videoplayicon from 'assets/images/home/videoplayicon.png';
// import stopicon from 'assets/images/home/stopicon.png';
// import startsimg from 'assets/images/home/startsimg.png';
import { useMediaQuery } from '@mui/material';
import {
  // createTheme,
  useTheme
} from '@mui/material/styles';
import Image from 'next/image';


function SectionTwo() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Grid container sx={{ background: '#fff', py: { lg: '84px', xs: '30px' }, px: { xs: 2 } }}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: { md: 'center', xs: 'center' } }}>
              <Typography variant="subheading1" sx={{ fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' } }}>
                ChildrenKARE
              </Typography>
              <Typography
                variant="bodytext"
                sx={{
                  textAlign: { md: 'center', xs: 'center' },
                  width: { md: '53%' },
                  pt: { md: 2, xs: 1 }
                }}
              >
                 We are dedicated and experienced team of professionals who are passionate about helping parents like you navigate the often
                complex landscape and of childcare options
              </Typography>
            </Stack>

            <Stack
              sx={{
                mt: { md: 4, xs: 2 },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                // px: { md: 5, xs: 0 },
                borderRadius: { md: '30px', xs: 0 },
                border: '1px solid transparent',
                overflow: 'hidden',
                height: { lg: '592px', xs: 'auto' }
              }}
            >
              {/* <ReactPlayer
                url={process.env.PUBLIC_URL + '/video/video2.mp4'}
                width="100%"
                height="auto"
                // borderRadius="30px"
                onEnded={()=> setIsPlaying(!isPlaying)}
                playing={isPlaying}
                style={{
                  borderRadius: '10px',
                  border: '1px solid transparent'
                }}
              /> */}
              {/* <iframe width="1250px" height="592px" src="https://www.youtube.com/embed/cOKsDi_txSo?si=7kOQJ9DiZrtJMUO8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" aria-controls='no-controls' controls></iframe> */}
              <iframe
                width={matches ? '1250' : 'auto'}
                height={matches ? '592' : 'auto'}
                src="https://www.youtube.com/embed/cOKsDi_txSo?rel=0&controls=0&si=7kOQJ9DiZrtJMUO8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              {/* <iframe width="1189" height="669" src="https://www.youtube.com/embed/svZFxG6q3_0?list=TLPQMjkwNTIwMjRT6iQ9MrIDJA" title="Woman Teaching in a Kindergarten | ChildrenKARE"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe> */}
              {/* <Box sx={{ position: 'absolute', left: '10%', width: { md: '100%', xs: '100px' } }}>
                <Image src='assets/images/home/startsimg.png'
                
                style={{ display: matches ? 'none' : 'none' }} alt="starsimg" />
              </Box>
              <Box sx={{ position: 'absolute', right: '10%', bottom: '10%' }}>
                <Image src='assets/images/home/startsimg.png'

                 style={{ display: matches ? 'none' : 'none' }} alt="starsimg" />
              </Box> */}
              <Box
                onClick={() => setIsPlaying(!isPlaying)}
                sx={{
                  position: 'none',
                  top: isPlaying ? 'auto' : '50%',
                  left: isPlaying ? 'auto' : '50%',
                  bottom: isPlaying ? '10px' : 'auto',
                  right: isPlaying ? '10px' : 'auto',
                  transform: isPlaying ? 'none' : 'translate(-50%, -50%)',
                  transition: 'top 0.5s ease-out, left 0.5s ease-out, transform 0.5s ease-out'
                }}
              >
                {isPlaying ? (
                  <>
                    <Image src='/assets/images/home/stopicon.png' alt="stopicon"
                    width={matches ? 77 : 50} height={ matches ? 77 : 50} 
                    style={{ 
                      // height: matches ? '77px' : '50px',
                       display: 'none' }} />
                  </>
                ) : (
                  <>
                    <Image src='/assets/images/home/videoplayicon.png' alt="videoplayicon"
                    width={matches ? 77 : 50} height={ matches ? 77 : 50}
                    style={{ 
                      // height: matches ? '77px' : '50px', 
                      display: 'none' }} />
                  </>
                )}
              </Box>
            </Stack>

            <Stack sx={{ display: 'none', justifyContent: 'center', alignItems: { md: 'center', xs: 'left' }, mt: '88px' }}>
              <Typography variant="subheading2" sx={{ fontSize: { lg: '28px', md: '26px', sm: '24px', xs: '22px' } }}>
                Our mission is simple
              </Typography>
              <Typography
                variant="bodytext"
                sx={{
                  textAlign: { md: 'center', xs: 'left' },
                  width: { md: '50%' },
                  pt: { md: 2, xs: 1 }
                }}
              >
                to connect families with the ideal childcare providers that align with your preferences, values, and specific requirements.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default SectionTwo;
