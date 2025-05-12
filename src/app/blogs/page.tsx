import React from 'react';
import { Container, Grid } from '@mui/material';
import Blogs from 'sections/blogs/blog_list';
import BlogsPage from 'sections/blogs/blogsPage';
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
      {/* <MetaTags>
        <title> Blogs-ChildrenKare</title>
        <meta
          name="description"
          content="At ChildrenKARE, we understand the importance of providing a secure and enriching environment for your child's growth. Read Best Daycare blogs here."
        />
        <meta
          property="og:description"
          content={`At ChildrenKARE, we understand the importance of providing a secure and enriching environment for your child's growth. Read Best Daycare blogs here.`}
        />
        <meta property="og:title" content={`Blogs-ChildrenKare`} />
        <meta property="og:url" content="https://childrenkare.com/blogs" />
        <meta name="robots" content="nosnippet" />
        <link rel="canonical" href="https://childrenkare.com/blogs" />
      </MetaTags> */}
      <Header />
      <BlogsPage />
      <Grid container sx={{ background: '#fff' }}>
        <Container>
          <Grid container>
            <Grid xs={12} sm={12} md={12} lg={12} sx={{ px: 2 }}>
              <Blogs />
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <NewSeoSection />

      <Footer />
    </>
  );
}

export default Bloglist;
