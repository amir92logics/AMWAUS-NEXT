import { Box, Grid, Stack, Typography, Rating } from '@mui/material';
import invisible from 'assets/images/review/image 421.png';

import girlThree from 'assets/images/review/girl 646.png';
import girlOne from 'assets/images/review/girl 644.png';
import girTwo from 'assets/images/review/girl 643.png';
import boyFive from 'assets/images/review/image 437.png';

import boyOne from 'assets/images/review/image 133.png';
// import boytwo from 'assets/images/review/image 237.png';
import boyThree from 'assets/images/review/image 634.png';
import boyFour from 'assets/images/review/image 250.png';
import boySix from 'assets/images/review/image 422.png';

import { useState } from 'react';
import HomeSectionFiveBannerImage from 'assets/images/icons/HomeSectionFiveBannerImage.png';
import rightarrow from 'assets/images/icons/Buttonright.png';
import leftarrow from 'assets/images/icons/buttonLeft.png';
import hoverright from 'assets/images/icons/hoverright.png';
import hoverleft from 'assets/images/icons/hoverleft.png';

function SectionFive() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4; // Number of cards to display at a time

  const [ishoverRight, setIsHoverRight] = useState(false);
  const [ishoverLeft, setIsHoverLeft] = useState(false);

  const handleMouseEnterRight = () => {
    setIsHoverRight(true);
  };

  const handleMouseLeaveRight = () => {
    setIsHoverRight(false);
  };
  const handleMouseEnterLeft = () => {
    setIsHoverLeft(true);
  };

  const handleMouseLeaveLeft = () => {
    setIsHoverLeft(false);
  };
  const handleNextClick = () => {
    if (startIndex + cardsPerPage < cardData.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  // Your card data
  const cardData: any = [
    {
      name: 'Jenny S.',
      rating: 5,
      review:
        "ChildrenKARE is wonderful. I was looking for daycare center but living in a big city, it seemed like a daunting task to even know where to start or to find options to consider. That's where  helped me through their network of providers.",
      image: girlOne,
    },
    {
      name: 'Michael D.',
      rating: 5,
      review:
        'As a working parent, finding quality childcare can be stressful. ChildrenKARE made it a easy! We discovered a fantastic preschool for our son, and the reviews from other parents were incredibly helpful in making our decision. Highly recommend!',
      image: boySix,
    },
    {
      name: 'Mike M.',
      rating: 4,
      review:
        "ChildrenKARE is like a one-stop-shop for childcare solutions. We found a lovely daycare for our twins, and the reviews and ratings from other parents gave us confidence in our choice. It's a must-visit site for any parent",
      image: boyOne,
    },
    {
      name: 'David L.',
      rating: 5,
      review:
        "A reliable resource for parents seeking childcare options. We found a nurturing and educational environment for our daughter through ChildrenKARE. The platform provides authentic and up to date data of daycare centers",
      image: invisible,
    },
    {
      name: 'Jessica H.',
      rating: 5,
      review:
        'This individual is a certified professional with substantial background in migration. He was able to complete my vision in time and as per agreed scope. Highly recommend!',
      image: girlOne,
    },
    {
      name: 'Chris R.',
      rating: 5,
      review:
        'Amazing selection of daycares and preschools on ChildrenKARE! We were able to compare options, read reviews, and make an informed decision. The platform truly simplifies the childcare search process.',
      image: boyFour,
    },
    {
      name: 'Williamson.',
      rating: 5,
      review:
        "I cannot recommend ChildrenKARE enough! It connected us with a fantastic daycare close to home. The platform's interface is intuitive, and the reviews from other parents were invaluable in making our decision.",
      image: boyFive,
    },
    {
      name: 'Amelia.',
      rating: 5,
      review:
        'This person is a bona fide expert with significant knowledge in the field of migration.He was able to complete my vision in time and as per agreed scope. Highly recommend!',
      image: girTwo,
    },
    {
      name: 'Sarah B.',
      rating: 4,
      review:
        'The ChildrenKARE website is user-friendly and comprehensive. It made finding a daycare for our little one surprisingly easy. We appreciate the transparency and the wealth of information available to help us make the right choice.',
      image: girlThree,
    },
    {
      name: 'Samuel H.',
      rating: 5,
      review:
        "I cannot recommend ChildrenKARE enough! It connected us with a fantastic daycare close to home. The platform's interface is intuitive, and the reviews from other parents were invaluable in making our decision.",
      image: boyThree,
    }
  ];
  const divStyle = {
    backgroundImage: `url(${HomeSectionFiveBannerImage})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat' // Adjust as needed
  };
  return (
    <Stack sx={{ background: '#fff' }}>
      <Stack sx={{ px: { md: 0, xs: 5 }, py: { md: 0, xs: 5 } }}>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            justifyContent: 'space-between',
            alignItems: 'center',
            py: { md: 6 },
            px: { md: 8 }
          }}
        >
          <Stack>
            <Typography variant="h2">What Our User Said about us </Typography>
            { }
          </Stack>
          <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: { md: 0, xs: 2 } }}>
            {/* {startIndex > 0 &&  */}
            <img
              style={{ padding: 6 }}
              src={ishoverLeft ? hoverleft : leftarrow}
              onMouseEnter={handleMouseEnterLeft}
              onMouseLeave={handleMouseLeaveLeft}
              onClick={handlePrevClick}
            />
            {/* } */}
            {/* {startIndex + cardsPerPage < cardData.length && */}
            <img
              style={{ padding: 6 }}
              src={ishoverRight ? hoverright : rightarrow}
              onMouseEnter={handleMouseEnterRight}
              onMouseLeave={handleMouseLeaveRight}
              onClick={handleNextClick}
            />
            {/* } */}
          </Stack>
        </Stack>

        {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}> */}
        <Grid container sx={{ px: { md: 4 } }}>
          {cardData.slice(startIndex, startIndex + cardsPerPage).map((card: any, index: number) => (
            <Grid xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ background: '#FFFFF', px: 4, py: 2, boxShadow: 5, m: 2, minHeight: { md: 320 }, borderRadius: 2 }}>
                <Stack sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
                  <img src={card.image} alt={card.name} />

                  <Stack>
                    <Typography sx={{ pl: 1.5 }} variant="h4">
                      {card.name}
                    </Typography>
                    <Rating sx={{ pl: 1 }} name="size-medium" defaultValue={card.rating} readOnly />
                  </Stack>
                </Stack>
                <Typography variant="body2" sx={{ pt: 2 }}>
                  {card.review}
                </Typography>
              </Box>
            </Grid>
          ))}
          {/* <Grid xs={12} sm={12} md={3} lg={3}>
                  <Box sx={{ background: '#FFFFF', p: 4, boxShadow: 5 }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <img src={invisible} />

                      <Stack>
                        <Typography variant="h6">Jerome Bell</Typography>
                        <Rating name="size-medium" defaultValue={5} readOnly />
                      </Stack>
                    </Stack>
                    <Typography component="p">
                      “This guy is true professional and very experienced in migration and server configuration. He was able to complete my
                      vision in time and as per agreed scope. Highly recommend!”
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={12} sm={12} md={3} lg={3}>
                  <Box sx={{ background: '#FFFFF', p: 4, boxShadow: 5 }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <img src={invisible} />

                      <Stack>
                        <Typography variant="h6">Jerome Bell</Typography>
                        <Rating name="size-medium" defaultValue={5} readOnly />
                      </Stack>
                    </Stack>
                    <Typography component="p">
                      “This guy is true professional and very experienced in migration and server configuration. He was able to complete my
                      vision in time and as per agreed scope. Highly recommend!”
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={12} sm={12} md={3} lg={3}>
                  <Box sx={{ background: '#FFFFF', p: 4, boxShadow: 5 }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <img src={invisible} />

                      <Stack>
                        <Typography variant="h6">Jerome Bell</Typography>
                        <Rating name="size-medium" defaultValue={5} readOnly />
                      </Stack>
                    </Stack>
                    <Typography component="p">
                      “This guy is true professional and very experienced in migration and server configuration. He was able to complete my
                      vision in time and as per agreed scope. Highly recommend!”
                    </Typography>
                  </Box>
                </Grid> */}
        </Grid>
        {/* </div> */}
        {/* <Grid container sx={{ px: 4 }}>
        <Grid xs={12} sm={12} md={3} lg={3}>
          <Box sx={{ background: '#FFFFF', p: 4, boxShadow: 5 }}>
            <Stack sx={{ display: 'flex', flexDirection: 'row' ,alignItems:"center"}}>
              <img src={invisible} />

              <Stack>
                <Typography variant="h6">Jerome Bell</Typography>
                <Rating name="size-medium" defaultValue={5} readOnly />
              </Stack>
            </Stack>
            <Typography component="p">
              “This guy is true professional and very experienced in migration and server configuration. He was able to complete my vision
              in time and as per agreed scope. Highly recommend!”
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={3}>
          <Box sx={{ background: '#FFFFF', p: 4, boxShadow: 5 }}>
            <Stack sx={{ display: 'flex', flexDirection: 'row' ,alignItems:"center"}}>
              <img src={invisible} />

              <Stack>
                <Typography variant="h6">Jerome Bell</Typography>
                <Rating name="size-medium" defaultValue={5} readOnly />
              </Stack>
            </Stack>
            <Typography component="p">
              “This guy is true professional and very experienced in migration and server configuration. He was able to complete my vision
              in time and as per agreed scope. Highly recommend!”
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={3}>
          <Box sx={{ background: '#FFFFF', p: 4, boxShadow: 5 }}>
            <Stack sx={{ display: 'flex', flexDirection: 'row' ,alignItems:"center"}}>
              <img src={invisible} />

              <Stack>
                <Typography variant="h6">Jerome Bell</Typography>
                <Rating name="size-medium" defaultValue={5} readOnly />
              </Stack>
            </Stack>
            <Typography component="p">
              “This guy is true professional and very experienced in migration and server configuration. He was able to complete my vision
              in time and as per agreed scope. Highly recommend!”
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={3}>
          <Box sx={{ background: '#FFFFF', p: 4, boxShadow: 5 }}>
            <Stack sx={{ display: 'flex', flexDirection: 'row' ,alignItems:"center"}}>
              <img src={invisible} />

              <Stack>
                <Typography variant="h6">Jerome Bell</Typography>
                <Rating name="size-medium" defaultValue={5} readOnly />
              </Stack>
            </Stack>
            <Typography component="p">
              “This guy is true professional and very experienced in migration and server configuration. He was able to complete my vision
              in time and as per agreed scope. Highly recommend!”
            </Typography>
          </Box>
        </Grid>
     
      </Grid> */}
      </Stack>

      <Grid container style={divStyle} spacing={2} sx={{ color: '#fff', my: { md: 8 }, py: { md: 10, xs: 5 }, px: { xs: 5 } }}>
        <Grid xs={12} sm={4} md={4} lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: "flex-start", sm: 'center' }, color: '#fff', px: 1, pt: { md: 0, xs: 2 } }}>
          <Typography variant="h2">110,000+</Typography>
          <Typography sx={{ textAlign: "center" }} variant="body1">
            Number of Listed Childcare Centers
          </Typography>
        </Grid>
        <Grid xs={12} sm={4} md={4} lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: "flex-start", sm: 'center' }, px: 1, pt: { md: 0, xs: 2 } }}>
          <Typography sx={{}} variant="h2">
            50+
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="body1">
          States Childcare Coverage
          </Typography>
        </Grid>
        <Grid xs={12} sm={4} md={4} lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: "flex-start", sm: 'center' }, px: 1, pt: { md: 0, xs: 2 } }}>
          <Typography sx={{}} variant="h2">
            800,00+
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="body1">
            Number of childcare workers
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default SectionFive;
