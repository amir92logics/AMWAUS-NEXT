import Header from 'components/header';
import CityDetailComp from 'sections/cityDetail';
import NewSeoSection from 'sections/home/NewSeoSection';
import Footer from 'components/footer';


// 👇 Optional dynamic meta
export async function generateMetadata() {
  return {
    title: `Find Best Daycares in USA | ChildrenKARE`,
    description: `Discover best daycares in USA with ChildrenKARE. Find affordable options with prices, reviews and photos for a reliable daycare choice. Start your search now!`,
    alternates: {
      canonical: `${process.env.PUBLIC_URL}citydetail`,
    },
  };
}

// 👇 Server Component
export default async function CityDetail() {
  return (
    <>
      <Header />
      <CityDetailComp />
      <NewSeoSection />
      <Footer />

    </>
  );
}