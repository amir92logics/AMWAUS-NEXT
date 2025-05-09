
import SearchDayCares from 'sections/search/seachPage';
import type { Metadata } from 'next';
import Header from 'components/header';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';

  // 👇 Optional dynamic meta
  export async function generateMetadata({ params }: { params: { zipcode: any, abr: string, daycares: string } }): Promise<Metadata> {
       const { abr, daycares, zipcode } = await params;

    return {
        title: `${daycares}`,
    description: `${daycares}`,
    openGraph: {
        title: `${daycares}`,
        description: `${daycares}`,
        url: `http://localhost:3000/${abr}/${daycares}/${zipcode}`,
      },
    alternates: {
        canonical: `http://localhost:3000/${abr}/${daycares}/${zipcode}`,  // ✅ Canonical URL
      },
    };
  }
  
  // 👇 Server Component
   async function SearchPage({ params }: { params: { zipcode: any, abr: string, daycares: string } }){
    // const { zipcode, daycares, abr } = useParams();
    const { abr, daycares, zipcode } = await params;
    // const zipcode = await params.zipcode; // ✅ This is fine in a server component
    // const daycares = await params.daycares; // ✅ This is fine in a server component
    // const abr = await params.abr; // ✅ This is fine in a server component
   
    return (
        <>
            <Header />
            <SearchDayCares zipcode={zipcode} abr={abr} daycares={daycares} />
            <NewSeoSection />=
            <Footer />
        </>
    );
}

export default SearchPage;
