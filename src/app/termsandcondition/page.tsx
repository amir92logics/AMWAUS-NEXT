// import React from 'react'

import TermsConditionComp from 'sections/termsandcondition';
import Header from 'components/header';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions',
    description: `'Discover ChildrenKARE Terms and Conditions. We are your trusted guide to finding the perfect daycare for your child. Simplifying search, ensuring reliability and prioritizing your family's needs.'`,
    openGraph: {
        title: `Terms and Conditions`,
        description: `'Discover ChildrenKARE Terms and Conditions. We are your trusted guide to finding the perfect daycare for your child. Simplifying search, ensuring reliability and prioritizing your family's needs.'`,
        url: `${process.env.PUBLIC_URL}termsandcondition`,
      },
    alternates: {
        canonical: `${process.env.PUBLIC_URL}termsandcondition`,  // ✅ Canonical URL
      },
    };

function TermsAndCondition() {
  return (
    <>
      <Header />
      <TermsConditionComp />
      <NewSeoSection />
      <Footer />
    </>
  );
}

export default TermsAndCondition;
