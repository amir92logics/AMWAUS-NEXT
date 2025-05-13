import Footer from 'components/footer';
import Header from 'components/header';
import NewSeoSection from 'sections/home/NewSeoSection';
import CityComp from 'sections/cityComponent';


const Statedetail = async ({ params }: any) => {
  // const router = useRouter();
  const { state, city } = await params;
  return (
    <>
      <Header />
      <CityComp city={city} state={state} />
      <NewSeoSection />
      <Footer />
    </>
  );
};

export default Statedetail;
