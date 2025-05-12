// app/browse/[state]/page.tsx

import type { Metadata } from 'next';
import axios from 'utils/axios'; // Custom axios instance
import Header from 'components/header';
import BrowseStatePage from 'sections/browse';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';

// 👇 SSR-friendly data fetcher
async function getStateData(state: string) {
  try {
    const response = await axios.get(`api/search/get_cities/${state}`);
    console.log(response, 'await')
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch state data:', error);
    return [];
  }
}

// 👇 Optional dynamic meta
export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
  const state = params.state?.replace('-', ' ');
  return {
    title: `Best Daycares in ${state} | ChildrenKARE`,
    description: `Find top daycares and childcare services in ${state}. Affordable, reviewed, and trusted daycare centers.`,
    alternates: {
      canonical: `${process.env.PUBLIC_URL}browse/${params.state}`,
    },
  };
}

// 👇 Server Component
export default async function Statedetail({ params }: { params: { state: string } }) {
  const state = params.state; // ✅ This is fine in a server component
  const data = await getStateData(state);
    console.log(data, 'await')
  return (
    <>
      <Header />
      <BrowseStatePage state={state} data={data} />
      <NewSeoSection />
      <Footer />

    </>
  );
}