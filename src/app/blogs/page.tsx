import React from 'react';
import BlogsPage from 'sections/blogs';
import Header from 'components/header';
import Footer from 'components/footer';
import NewSeoSection from 'sections/home/NewSeoSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs-ChildrenKare',
  description: `'At ChildrenKARE, we understand the importance of providing a secure and enriching environment for your child's growth. Read Best Daycare blogs here.'`,
  openGraph: {
    title: `Blogs-ChildrenKare`,
    description: `'At ChildrenKARE, we understand the importance of providing a secure and enriching environment for your child's growth. Read Best Daycare blogs here.'`,
    url: `${process.env.PUBLIC_URL}blogs`,
  },
  alternates: {
    canonical: `${process.env.PUBLIC_URL}blogs`,  // ✅ Canonical URL
  },
};
function Bloglist() {
  return (
    <>
      <Header />
      <BlogsPage />
      <NewSeoSection />
      <Footer />
    </>
  );
}

export default Bloglist;
