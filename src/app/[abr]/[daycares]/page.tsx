
import SearchDayCares from 'sections/search/seachPage';
import type { Metadata } from 'next';
import Header from 'components/header';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';
import axios from 'utils/axios'; // Custom axios instance

async function getAIData(_cityName: any, _state: any) {
  try {
    const response = await axios.get(`api/city/get-content/city?state=${_state}&city=${_cityName}`);
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch state data:', error);
    return [];
  }
}

// 👇 Optional dynamic meta
export async function generateMetadata({ params }: { params: { abr: string, daycares: string } }): Promise<Metadata> {
  //      const { abr, daycares } = await params;
  // const zipcode = await params.zipcode; // ✅ This is fine in a server component
  const daycares = await params.daycares; // ✅ This is fine in a server component
  const abr = await params.abr; // ✅ This is fine in a server component
  const cityName = daycares.replace('daycares-in-', '').replace(/\-+/g, ' ');
  const data = await getAIData(cityName, abr);
  const seoTitle = data.seo_title;
  const seoDescription = data.seo_description;
  const seoKeywords = data.lsi_keywords

  return {
    // title: `${daycares}`,
    title: seoTitle ? seoTitle : `Best Daycares Near Me in ${cityName}`,
    description: seoDescription ? seoDescription : `Find daycares in ${cityName}. Explore trusted child care and preschool services,
  and explore best daycares in${cityName}; at affordable cost.`,
    keywords: seoKeywords,
    openGraph: {
      title: seoTitle ? seoTitle : `Best Daycares Near Me in ${cityName}`,
      description: seoDescription ? seoDescription : `Find daycares in ${cityName}. Explore trusted child care and preschool services,
  and explore best daycares in${cityName}; at affordable cost.`,
      url: `${process.env.PUBLIC_URL}${abr}/${daycares}`,

    },
    alternates: {
      canonical: `${process.env.PUBLIC_URL}${abr}/${daycares}`,  // ✅ Canonical URL
    },
  };
}

// 👇 Server Component
async function SearchPage({ params }: { params: { abr: string, daycares: string } }) {
  // const { zipcode, daycares, abr } = useParams();
  // const { abr, daycares } = await params;
  // const zipcode = await params.zipcode; // ✅ This is fine in a server component
  const daycares = await params.daycares; // ✅ This is fine in a server component
  const abr = await params.abr; // ✅ This is fine in a server component
  const cityName = daycares.replace('daycares-in-', '').replace(/\-+/g, ' ');
  //  console.log(data, 'gerr')
  return (
    <>
      <Header />
      <SearchDayCares abr={abr} daycares={cityName} />
      <NewSeoSection />=
      <Footer />
    </>
  );
}

export default SearchPage;
