
import SearchDayCares from 'sections/search/seachPage';
import type { Metadata } from 'next';
import Header from 'components/header';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';
import axios from 'utils/axios'; // Custom axios instance


  interface PageProps {
  params: {
    zipcode: string;
    abr: string;
    daycares: string;
  };
}


// 👇 SSR-friendly data fetcher
async function getAIData(_cityName: any, _state: any, _category?: any) {
  try {
    const response = await axios.get(`api/city/get-content/city?state=${_state}&city=${_cityName}`);
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch state data:', error);
    return [];
  }
}
//  const getAIContent = async (_cityName: any, _state: any, _category?: any) => {
//       const types = ['childcare', 'daycare-centers', 'city', 'infant-care', 'preschools', 'special-needs', 'toddler'];
//       let _tempCategory = _category.split('-')[0];
  
//       // Check if the first word exists in the array
//       _tempCategory = types.find((_type) => _type.startsWith(_tempCategory));
  
//       await axios({
//         method: 'get',
//         url: `/api/city/get-content/${_tempCategory}?state=${_state}&city=${_cityName}`
//       })
//         .then(async (response) => {
//           debugger
//           if (response.data.status == 'pass') {
//             const _tempAIContent: any = response?.data?.data;
  
  
//             // Example Usage
//             const _aiContent = wrapContentInDiv(_tempAIContent.content);
//             const _aboutCity = wrapContentInDiv(_tempAIContent.about_city);
//             // console.log(updatedHtml, 'updatedHtml');
//             setAIContent(_aiContent)
//             setAIAboutCity(_aboutCity)
//             // setSeoTitle(_tempAIContent?.seo_title)
//             // setSeoDescription(_tempAIContent?.seo_description)
//             // setSeoKeywords(_tempAIContent?.lsi_keywords)
//           }
  
  
//         })
//         .catch((error) => {
//           console.log(error.message)
//         });
  
//     };

  // 👇 Optional dynamic meta
  export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
       const { abr, daycares, zipcode } = params;
    //     const zipcode = await params.zipcode; // ✅ This is fine in a server component
    // const daycares = await params.daycares; // ✅ This is fine in a server component
    // const abr = await params.abr; // ✅ This is fine in a server component
    const cityName = daycares.replace('daycares-in-', '').replace(/\-+/g, ' ');
  let seoTitle = '';
  let seoDescription = '';
  let seoKeywords = '';
    if(!/^\d+$/.test(`${zipcode}`)){
 const data = await getAIData(zipcode, cityName , abr);
   seoTitle = data.seo_title;
   seoDescription = data.seo_description;
   seoKeywords = data.lsi_keywords
    }
   

  return {
    // title: `${daycares}`,
    title: seoTitle ? seoTitle : `Best Daycares, Childcare & Preschools in ${zipcode}`,
    description: seoDescription ? seoDescription : `Find daycares near me in ${zipcode} for your children. Explore trusted child care services, preschools and best daycares in ${zipcode},${abr}; at affordable cost.`,
    keywords: seoKeywords ? seoKeywords : `Find daycares near me in ${zipcode} for your children. Explore trusted child care services, preschools and best daycares in ${zipcode},${abr}; at affordable cost.`,
    openGraph: {
      title: seoTitle ? seoTitle : `Best Daycares Near Me in ${cityName}`,
      description: seoDescription ? seoDescription : `Find daycares in ${cityName}. Explore trusted child care and preschool services,
  and explore best daycares in${cityName}; at affordable cost.`,
      url:   `${process.env.PUBLIC_URL}${abr}/${daycares}/${zipcode}`,

    },
    alternates: {
      canonical: `${process.env.PUBLIC_URL}${abr}/${daycares}/${zipcode}`,  // ✅ Canonical URL
    },
  };
}

  // 👇 Server Component
   async function SearchPage({ params }: PageProps){
    // const { zipcode, daycares, abr } = useParams();
    // const { abr, daycares, zipcode } = await params;
    const zipcode = await params.zipcode; // ✅ This is fine in a server component
    const daycares = await params.daycares; // ✅ This is fine in a server component
    const abr = await params.abr; // ✅ This is fine in a server component
    const data = await getAIData(zipcode, daycares , abr  );
       console.log(data, 'data..')
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
