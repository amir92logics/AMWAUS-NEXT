// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Container, Grid, Rating, Stack, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

// project-imports
import FadeInWhenVisible from '../landing/Animation';
import MainCard from 'components/MainCard';
import girlThree from 'assets/images/review/girl 646.png';
import girlOne from 'assets/images/review/girl 644.png';
import girTwo from 'assets/images/review/girl 643.png';
import boyFive from 'assets/images/review/image 437.png';

import boyOne from 'assets/images/review/image 133.png';
// import boytwo from 'assets/images/review/image 237.png';
import boyThree from 'assets/images/review/image 634.png';
import boyFour from 'assets/images/review/image 250.png';
import boySix from 'assets/images/review/image 422.png';
import invisible from 'assets/images/review/image 421.png';
// assets

// ================================|| SLIDER - ITEMS ||================================ //

const Item = ({ item }: { item: { name: string; rating: number; review: string; image: string; highlight?: boolean } }) => (
  <MainCard
    sx={{
      width: { xs: '300px', md: '420px' },
      cursor: 'pointer',
      my: 0.2,
      mx: 1.5
    }}
  >
    <Stack sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
      <img src={item.image} alt={item.name} />

      <Stack>
        <Typography variant="bodytext" sx={{ pl: 1.5, fontWeight: 700 }}>
          {item.name}
        </Typography>
        <Rating sx={{ pl: 1 }} name="size-medium" defaultValue={item.rating} readOnly />
      </Stack>
    </Stack>
    <Typography variant="bodytext" sx={{ pt: 2 }}>
      {item.review}
    </Typography>
  </MainCard>
);

// ==============================|| LANDING - TestimonialPage ||============================== //
const TestimonialPage = () => {
  const theme = useTheme();
  const items = [
    {
      name: 'Jenny S.',
      rating: 5,
      review:
        "ChildrenKARE is wonderful. I was looking for daycare center but living in a big city, it seemed like a daunting task to even know where to start or to find options to consider. That's where  helped me through their network of providers.",
      image: girlOne
    },
    {
      name: 'Michael D.',
      rating: 5,
      review:
        'As a working parent, finding quality childcare can be stressful. ChildrenKARE made it a easy! We discovered a fantastic preschool for our son, and the reviews from other parents were incredibly helpful in making our decision. Highly recommend!',
      image: boySix
    },
    {
      name: 'Mike M.',
      rating: 4,
      review:
        "ChildrenKARE is like a one-stop-shop for childcare solutions. We found a lovely daycare for our twins, and the reviews and ratings from other parents gave us confidence in our choice. It's a must-visit site for any parent",
      image: boyOne
    },
    {
      name: 'David L.',
      rating: 5,
      review:
        'A reliable resource for parents seeking childcare options. We found a nurturing and educational environment for our daughter through ChildrenKARE. The platform provides authentic and up to date data of daycare centers',
      image: invisible
    },
    {
      name: 'Jessica H.',
      rating: 5,
      review:
        'This individual is a certified professional with substantial background in migration. He was able to complete my vision in time and as per agreed scope. Highly recommend!',
      image: girlOne
    },
    {
      name: 'Chris R.',
      rating: 5,
      review:
        'Amazing selection of daycares and preschools on ChildrenKARE! We were able to compare options, read reviews, and make an informed decision. The platform truly simplifies the childcare search process.',
      image: boyFour
    },
    {
      name: 'Williamson.',
      rating: 5,
      review:
        "I cannot recommend ChildrenKARE enough! It connected us with a fantastic daycare close to home. The platform's interface is intuitive, and the reviews from other parents were invaluable in making our decision.",
      image: boyFive
    },
    {
      name: 'Amelia.',
      rating: 5,
      review:
        'This person is a bona fide expert with significant knowledge in the field of migration.He was able to complete my vision in time and as per agreed scope. Highly recommend!',
      image: girTwo
    },
    {
      name: 'Sarah B.',
      rating: 4,
      review:
        'The ChildrenKARE website is user-friendly and comprehensive. It made finding a daycare for our little one surprisingly easy. We appreciate the transparency and the wealth of information available to help us make the right choice.',
      image: girlThree
    },
    {
      name: 'Samuel H.',
      rating: 5,
      review:
        "I cannot recommend ChildrenKARE enough! It connected us with a fantastic daycare close to home. The platform's interface is intuitive, and the reviews from other parents were invaluable in making our decision.",
      image: boyThree
    }
  ];
  return (
    <>
      <Box sx={{ mt: { md: 15, xs: 2.5 } }}>
        <Container>
          <Grid container spacing={2} justifyContent="center" sx={{ textAlign: 'center', marginBottom: 4 }}>
            <Grid item >
              <Typography
                variant="subheading1"
                sx={{ width: { md: '300px', xs: '100%' }, textAlign: 'center', pt: 2 }}
              >
                They{' '}
                <Box
                  component="span"
                  sx={{
                    color: theme.palette.primary.main
                  }}
                >
                  love
                </Box>{' '}
                ChildrenKARE, Now your turn 😍
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Typography>
                  We take pride in our Childcare Search services, which has been consistently rated 4.6/5 by our satisfied customers. It
                  brings us joy to share the positive feedback we have received from our loyal clients.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ mb: { md: 10, xs: 2.5 } }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <FadeInWhenVisible>
              <Marquee pauseOnHover gradient={false}>
                {items.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Marquee>
            </FadeInWhenVisible>
          </Grid>
          <Grid item xs={12}>
            <FadeInWhenVisible>
              <Marquee pauseOnHover direction="right" gradient={false}>
                {items.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Marquee>
            </FadeInWhenVisible>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default TestimonialPage;
