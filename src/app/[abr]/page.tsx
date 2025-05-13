// app/browse/[state]/page.tsx

import type { Metadata } from 'next';
import axios from 'utils/axios'; // Custom axios instance
import Header from 'components/header';
import StatePage from 'sections/state';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';

// 👇 SSR-friendly data fetcher
async function getStateData(state: any) {
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
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const state = await params.abr?.replace('-', ' ');
  return {
    title: `Best Daycares in ${state} | ChildrenKARE`,
    description: `Find top daycares and childcare services in ${state}. Affordable, reviewed, and trusted daycare centers.`,
    alternates: {
      canonical: `${process.env.PUBLIC_URL}${state}`,
    },
  };
}

// 👇 Server Component
export default async function Statedetail({ params }: any) {
  const state = params.abr; // ✅ This is fine in a server component
  const data = await getStateData(state);
    console.log(data, 'await')
  return (
    <>
      <Header />
      <StatePage state={state}  data={data} />
      <NewSeoSection />
      <Footer />

    </>
  );
}