import React from 'react'
import { Grid} from '@mui/material';
import BlogDetailPage from 'sections/blogs/blog_detail';
import Header from 'components/header';
import Footer from 'components/footer';
import type { Metadata } from 'next';
import axios from 'utils/axios'; // Custom axios instance

// 👇 SSR-friendly data fetcher
async function getStateData(id: number) {
    try {
      const response = await axios.get('api/blog/get_blog_content/' + id);
      return response.data.data ;
    } catch (error) {
      console.error('Failed to fetch state data:', error);
      return [];
    }
  }
  
  // 👇 Optional dynamic meta
  export async function generateMetadata({ params }: { params: { id: number, slug: string } }): Promise<Metadata> {
    const id = params.id; // ✅ This is fine in a server component
    const data = await getStateData(id);
    return {
        title: `${data?.title}`,
    description: `${data?.meta_description}`,
    openGraph: {
        title: `${data?.title}`,
        description: `${data?.meta_description}`,
        url: `${process.env.PUBLIC_URL}blogsDetail/${data?.id}/${data?.slug}`,
      },
    alternates: {
        canonical: `${process.env.PUBLIC_URL}blogsDetail/${data?.id}/${data?.slug}`,  // ✅ Canonical URL
      },
    };
  }
  
  // 👇 Server Component
   async function BlogDetail({ params }: { params: { id: number } }) {
    
    const id = params.id; // ✅ This is fine in a server component
    return (
    <>
         {/* <MetaTags>
            <title>{blogdetail?.title}</title>
            <meta
              name="description"
              content={blogdetail?.meta_description}
            />
             <meta property="og:title" content={blogdetail?.title} />
             <meta name="robots" content="nosnippet" />
    <meta property="og:url" content={`https://childrenkare.com/blogsDetail/${blogdetail?.id}/${blogdetail?.slug}`} />
    <meta property="og:description" content={blogdetail?.meta_description} />
    
                <link rel="canonical" href={`https://childrenkare.com/blogsDetail/${blogdetail?.id}/${blogdetail?.slug}`} />
                
          </MetaTags> */}
      <Header />
      <Grid container sx={{ backgroundColor: '#fff' }}>
    
    <Grid item xs={12} sm={12} md={12} lg={12} >
        <BlogDetailPage/>
    </Grid>
  </Grid> 
        <Footer />
    </>
    )
}

export default BlogDetail;