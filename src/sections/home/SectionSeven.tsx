import { Grid, Stack, Typography } from '@mui/material';
import HomeSectionFiveBannerImage from 'assets/images/icons/HomeSectionSeven.png';
import Accordion from 'components/Accordian';
function SectionSeven() {
  // const divStyle = {
  //   backgroundImage: `url(${HomeSectionFiveBannerImage})`,
  //   backgroundSize: '100% 100%',
  //   backgroundRepeat: 'no-repeat', // Adjust as needed
  //   // height: '100vh',
  // };
  const data = [
    {
      question: 'Why Daycare is Good for your Child?',
      answer:
        "Daycare promotes early learning, socialization, and skill development, laying a foundation for a child's future education and well-being."
    },
    {
      question: 'How to Find a Daycare for Your Child with ChildrenKARE?',
      answer:
        'Find the perfect daycare for your child effortlessly with ChildrenKARE by entering your location  and reviewing the provided information of the daycare centers.'
    },
    {
      question: 'Are Daycares healthy for kids?',
      answer:
        'Yes, daycare supports physical, social, and cognitive development, exposure to learning experiences, and the development of social skills.'
    },
    {
      question: 'How to find Nearby Daycares?',
      answer:
        "Use ChildrenKARE's platform, enter location preferences, and browse a list of local daycares with detailed information and reviews."
    },
    {
      question: 'How do Daycares ensure child safety?',
      answer:
        'Daycares prioritize safety through staff training, facility inspections, health protocols, secure entry/exit, and emergency response plans. At ChildrenKARE, we ensure licensing and accreditation of each center listed on our platform'
    }
  ];
  return (
    <Grid container sx={{ background: '#fff'}}>
      <Grid item xs={12} sm={12} md={6} lg={6}
      // style={divStyle}
      >
        <img src={HomeSectionFiveBannerImage} width="100%" height="100%" />


      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} sx={{ background: '#8ECAE6', px: 8, py: 8 }}>
        <Stack>
          <Typography variant="subheading1"  sx={{ mb:10,fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '26px' },}}>
            Frequently asked Questions
          </Typography>

          <div className="App">
            {data.map(({ question, answer }, id) => (
              <Accordion key={id} question={question} answer={answer} />
            ))}
          </div>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SectionSeven;
