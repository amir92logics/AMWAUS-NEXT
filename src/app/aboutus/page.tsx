import Header from 'components/header';
import Footer from 'components/footer';
import AboutUsComp from 'sections/aboutus';
import NewSeoSection from 'sections/home/NewSeoSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About us',
    description: `'Best Daycares In USA, Top Daycares In USA, Best Daycares Near Me, Daycares Near Me, Best Daycare Centers in My Area, High Quality Daycare Services, Daycares In USA, Daycares, Daycare Services, Best Daycare Centers, Daycare Centers in USA, Affordable Childcare Centers, Children care centers, Find Best Daycares, Quality Daycare Providers, Affordable Childcare near me, Top Daycare Centers in the USA, ChildrenKARE.'`,
    openGraph: {
        title: `About us`,
        description: `'Best Daycares In USA, Top Daycares In USA, Best Daycares Near Me, Daycares Near Me, Best Daycare Centers in My Area, High Quality Daycare Services, Daycares In USA, Daycares, Daycare Services, Best Daycare Centers, Daycare Centers in USA, Affordable Childcare Centers, Children care centers, Find Best Daycares, Quality Daycare Providers, Affordable Childcare near me, Top Daycare Centers in the USA, ChildrenKARE'`,
        url: `http://localhost:3000/aboutus`,
      },
    alternates: {
        canonical: 'http://localhost:3000/aboutus',  // ✅ Canonical URL
      },
    };

function AboutUs() {
  return (
    <>
      <Header />
      <AboutUsComp />
      <NewSeoSection />

<Footer />
    </>
  );
}

export default AboutUs;
