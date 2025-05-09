import { Grid, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { useTheme } from '@mui/material/styles';
import seobanner from 'assets/images/home/seobanner.png';

function SectionSeo() {
  const data = [
    {
      question: 'Are You Looking for the Best Daycares In USA',
      answer:
        ' Are you a parent, searching for the <a href="/"> <strong> Best Daycares In USA? </strong></a> This is where ChildrenKARE proves its worth as a trustworthy resource which can find capable daycares to connect with parents. No one wants to take any wrong chances when it comes to choosing the right day-cares for their kids. The reason why we have created our platform is to make this process of choosing day-cares easy and simple so parents can easily navigate the best day-care choices for their little ones. ChildrenKARE sticks out by providing the most authentic, licensed childcare providers throughout the United States. We provide the most accurate and up-to-date information about each daycare center to help parents choose the best daycares for their kids.'
    },
    {
      question: 'How ChildrenKARE Helps Parents to Find Top Daycares In USA',
      answer:
        'ChildrenKARE is a dedicated companion that helps you Find <a href="/page/top-dayacres-usa"> <strong> Top Daycares In USA </strong></a> . We understand that every child is diffe from one another, and parents have different needs when it comes to choosing from daycare options. With the help of our database, parents can easily navigate and filter daycare options based on multiple criteria which includes location, services offered and user reviews. Parents can take advantage of our large network of childcare providers which in turn can help them make good and well-informed decisions regarding their beloved little ones. We know how crucial it is for parents to find the right options for caretaking; this is the reason why we focus on connections and keep the best standards of safety, quality care, and professionalism.'
    },
    {
      question: 'Explore Best Daycares Near Me',
      answer:
        'ChildrenKARE made it easy for parents to find <a href="/page/daycares-near-me"> <strong> Best Daycares Near Me </strong></a> as we assist parents in finding good quality daycares near their location. Our convenient and user-friendly platform allows the user to locate high-class daycare centers according to their personal preferences. Therefore, our platform does not just show choices which are highly rated but also those that are easily located according to the user needs.'
    },
    {
      question: 'Find Best Daycare Centers in My Area',
      answer:
        'Our huge database ensures that there are <a href="/page/daycares-centers-near-me"> <strong> Best Daycare Centers in My Area</strong></a>.Furthermore, ChildrenKARE not only provides a listing of daycare centres; but also ensures that the information of each centre is authentic and up to date. From all aspects of childcare, our platform equips you with the information needed to make an informed selection. We believe that locating the right daycare needs to be an easy job, and ChildrenKARE is devoted to increasing ease and comfort for parents in the USA who are looking for quality daycares.'
    },
    {
      question: 'Do Your Children Need High Quality Daycare Services',
      answer:
        'Every child is benefitted from splendid daycare service, and  ChildrenKARE is here to ensure that parents can access <a href="/page/high-quality-daycare-services"> <strong>High Quality Daycare Services</strong></a> in their area. We apprehend the importance of early youth improvement and the effect that a nurturing daycare environment may have on a baby development. Our platform is devoted to connecting parents with daycare centres that prioritise excellence in care, training, and protection. Either youre looking for educational enrichment, social improvement, or a mixture of both, ChildrenKARE is your trusted companion in locating daycare services that align with your expectations.'
    },
    {
      question: 'Why Choose ChildrenKARE',
      answer:
        'Why do parents pick <a href="/"> <strong> ChildrenKARE</strong></a> over other daycare search platforms? The answer lies in our determination to excellence and transparency. Because of our extraordinary network of childcare providers, we make sure that parents get access to the complete and authentic data. Our platform isnt just about connecting parents with daycare centres; it is also about empowering parents to select the best options their children. We offer insights into daycare facilities, health & safety measures, rating & reviews, and much more.ChildrenKARE isnt simply a daycare providers network; its an associate to discover the best daycare options for your child, making sure a foundation of care and assisting in a healthy development.'
    }
  ];
  return (
    <Grid container sx={{ background: '#FFFDFC', display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '13px' }}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <img src={seobanner} alt="seobanner" style={{ width: '100%', height: '100%' }} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6} sx={{ px: 8 }}>
        {data.map((item, index) => (
          <Accordion key={index} sx={{ border: 'none', background: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
              sx={{
                flexDirection: 'row',
                borderBottom: '1px solid #DADBDD',
                background: 'none',
                padding: '10px'
              }}
            >
              <Typography variant="bodytext"> {item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {' '}
              <Typography variant="bodytext" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
}

export default SectionSeo;
