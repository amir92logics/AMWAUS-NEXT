
import SearchDayCares from 'sections/search/seachPage';
import type { Metadata } from 'next';
import Header from 'components/header';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';
import axios from 'utils/axios'; // Custom axios instance


  interface PageProps {
  params: {
    zipcode: any;
    abr: string;
    daycares: string;
  };
}


// 👇 SSR-friendly data fetcher
async function getAIData(_cityName: any, _state: any, _category?: any) {
  try {
      const types = ['childcare', 'daycare-centers', 'city', 'infant-care', 'preschools', 'special-needs', 'toddler'];
      let _tempCategory = _category.split('-')[0];
  
      // Check if the first word exists in the array
      _tempCategory = types.find((_type) => _type.startsWith(_tempCategory));
  
    const response = await axios.get(`/api/city/get-content/${_tempCategory}?state=${_state}&city=${_cityName}}`);
    return response.data.data ;
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
       const { abr, daycares, zipcode } = await params;
      
    return {
        // title: zipcode && /^\d+$/.test(zipcode) ? `Best Daycares, Childcare & Preschools in ${zipcode}` : seoTitle ? seoTitle : `Best ${category ? (category == 'Childcare' ? 'Child Care' : category + (abr == 'daycare' ? ' Centers' : '')) : 'Daycares'} ${!location.pathname.includes('nearby') ? '' : 'Near Me'
        //     } in cityName,
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
   async function SearchPage({ params }: PageProps){
    // const { zipcode, daycares, abr } = useParams();
    const { abr, daycares, zipcode } = await params;
    // const zipcode = await params.zipcode; // ✅ This is fine in a server component
    // const daycares = await params.daycares; // ✅ This is fine in a server component
    // const abr = await params.abr; // ✅ This is fine in a server component
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
