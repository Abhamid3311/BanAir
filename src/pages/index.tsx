import RootLayout from '@/components/layouts/RootLayout'
import Banner from '@/components/UI/Home/Banner';
import FlightSearch from '@/components/UI/Home/FlightSearch';
import { baseUrl } from '@/components/utils/url';
import { IFlightDeal, ITestimonial } from '@/components/utils/Types';
import Testimonials from '@/components/UI/Home/Testimonials';
import Destinations from '@/components/UI/Home/Destinations';
import Packages from '@/components/UI/Home/Packages';
import Plans from '@/components/UI/Home/Plans';
import BackToTopButton from '@/components/UI/PAges/BackToTopButton';


export default function Home({ flights, filterdData, testimonials }: { flights: IFlightDeal[], filterdData: IFlightDeal[], testimonials: ITestimonial[] }) {
  // console.log(flights);


  return (
    <div>
      <Banner />
      <FlightSearch filterdData={filterdData} />
      <Destinations />
      <Packages flights={flights} />
      <Testimonials testimonials={testimonials} />
      <Plans />
      {/* <BackToTopButton /> */}
    </div>
  )
}


Home.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};



export const getStaticProps = async () => {
  const res = await fetch(`${baseUrl}/deal`);
  const data = await res.json();

  const res1 = await fetch(`${baseUrl}/testimonial`);
  const data1 = await res1.json();

  // console.log(data1);


  const shuffledFlights = [...data].sort(() => Math.random() - 0.5);
  const selectedFlights = shuffledFlights.slice(0, 5);

  return {
    props: {
      flights: data,
      filterdData: selectedFlights,
      testimonials: data1,
    },
    revalidate: 60,
  }
};