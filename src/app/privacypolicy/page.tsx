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
        url: `${process.env.PUBLIC_URL}privacypolicy`,
      },
    alternates: {
        canonical: `${process.env.PUBLIC_URL}privacypolicy`,  // ✅ Canonical URL
      },
    };

function PrivacyPolicy() {
  return (
    <>
      <Header />
     <PrivacyPolicyPage />
     <NewSeoSection />
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
