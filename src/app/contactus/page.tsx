import Header from 'components/header';
import Footer from 'components/footer';
import AboutUsComp from 'sections/contactus';
import NewSeoSection from 'sections/home/NewSeoSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact us',
  description: `'Got questions about daycare services? Reach out to us! We're here to help. Contact us anytime for friendly assistance and quick answers.'`,
  openGraph: {
    title: `Contact us`,
    description: `'Got questions about daycare services? Reach out to us! We're here to help. Contact us anytime for friendly assistance and quick answers.'`,
    url: `http://localhost:3000/contactus`,
  },
  alternates: {
    canonical: 'http://localhost:3000/contactus',  // ✅ Canonical URL
  },
};

function ContactUs() {
  return (
    <>
      <Header />
      <AboutUsComp />
      <NewSeoSection />

<Footer />
    </>
  );
}

export default ContactUs;
