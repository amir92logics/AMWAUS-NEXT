import React from 'react'
import BlogDetailPage from 'sections/blogs/blog_detail';
import Header from 'components/header';
import Footer from 'components/footer';
import type { Metadata } from 'next';
import axios from 'utils/axios'; // Custom axios instance
import NewSeoSection from 'sections/home/NewSeoSection';

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
    return (
    <>
      <Header />
      <BlogDetailPage/>
      <NewSeoSection />
      <Footer />
    </>
    )
}

export default BlogDetail;