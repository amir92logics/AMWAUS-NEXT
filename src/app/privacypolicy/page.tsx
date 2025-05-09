import { Stack } from '@mui/material';
import Header from 'components/header';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';
import PrivacyPolicyPage from 'sections/privacypolicy';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: `'Explore our Privacy Policy to understand how we safeguard your information at ChildrenKARE. Your privacy and security are paramount to us.'`,
    openGraph: {
        title: `Privacy Policy`,
        description: `'Explore our Privacy Policy to understand how we safeguard your information at ChildrenKARE. Your privacy and security are paramount to us.'`,
        url: `http://localhost:3000/privacypolicy`,
      },
    alternates: {
        canonical: 'http://localhost:3000/privacypolicy',  // ✅ Canonical URL
      },
    };

function PrivacyPolicy() {
  return (
    <Stack sx={{ overflow: 'hidden', background: '#fff' }}>
      <Header />
     <PrivacyPolicyPage />
     <NewSeoSection />
      <Footer />
    </Stack>
  );
}

export default PrivacyPolicy;
