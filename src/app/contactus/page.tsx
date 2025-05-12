// 'use client';

import Header from 'components/header';
import { Grid, Container } from '@mui/material';

import Footer from 'components/footer';
import SectionOne from 'sections/contactus/firstSection';
import SectionTwo from 'sections/contactus/SectionTwo';
import SectionThree from 'sections/contactus/SectionThree';
import NewSeoSection from 'sections/home/NewSeoSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact us',
    description: `'Got questions about daycare services? Reach out to us! We're here to help. Contact us anytime for friendly assistance and quick answers.'`,
    openGraph: {
        title: `Contact us`,
        description: `'Got questions about daycare services? Reach out to us! We're here to help. Contact us anytime for friendly assistance and quick answers.'`,
        url: `${process.env.PUBLIC_URL}contactus`,
      },
    alternates: {
        canonical: `${process.env.PUBLIC_URL}contactus`,  // ✅ Canonical URL
      },
    };
function ContactUs() {
  return (
    <>
      <Header />
      <SectionOne />
      <Grid container>
        <Container>
          <Grid container>
            <Grid xs={12} sm={12} md={12} lg={12} sx={{}}>
              <SectionTwo />
            </Grid>
            <Grid xs={12} sm={12} md={12} pt={50} lg={12} sx={{ mt: '-180px',mb:'56px' }}>
              <SectionThree />
            </Grid>
          </Grid>
        </Container>

        <Grid xs={12} sm={12} md={12} lg={12} sx={{ background: '#fff' }}>
          <NewSeoSection />
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default ContactUs;
