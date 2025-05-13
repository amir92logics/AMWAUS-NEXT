import Header from 'components/header';
import SearchnameComp from 'sections/popularSearchPage';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';
import type { Metadata } from 'next';
import axios from 'utils/axios'; // Custom axios instance


// 👇 SSR-friendly data fetcher
async function getStateData(state: string) {
  try {
    const response = await axios.get(`api/search/popular_key/${state}`);
    console.log(response, 'await')
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch state data:', error);
    return [];
  }
}

// 👇 Optional dynamic meta
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const _searchname = params.searchname?.replace(/\s+/g, '-').toLowerCase();
  const data = await getStateData(_searchname);
  return {
    title: data.length > 0 ? data[0].meta_title : '',
    description: data.length > 0 ? data[0].meta_description : '',
    alternates: {
      canonical: `${process.env.PUBLIC_URL}page/${data.length > 0 ? data[0].key : ''}`,
    },
  };
}

// 👇 Server Component
export default async function CityDetail({ params }: any) {
  const _searchname = params.searchname?.replace(/\s+/g, '-').toLowerCase();
  return (
    <>
      <Header />
      <SearchnameComp searchname={_searchname} />
      <NewSeoSection />
      <Footer />

    </>
  );
}