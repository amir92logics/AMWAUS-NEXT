// 'use client';

import Header from 'components/header';
import Footer from 'components/footer';
import ContactusComp from 'sections/contactus';
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
      <ContactusComp />
      <NewSeoSection />
      <Footer />
    </>
  );
}

export default ContactUs;
