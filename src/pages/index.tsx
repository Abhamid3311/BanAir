import RootLayout from '@/components/layouts/RootLayout'
import Banner from '@/components/UI/Banner';
import FlightSearch from '@/components/UI/FlightSearch';
import { baseUrl } from '@/components/utils/url';
import { IFlightDeal, ITestimonial } from '@/components/utils/Types';
import Testimonials from '@/components/UI/Testimonials';


export default function Home({ flights, filterdData, testimonials }: { flights: IFlightDeal[], filterdData: IFlightDeal[], testimonials: ITestimonial[] }) {
  // console.log(flights);


  return (
    <div>
      <Banner />
      <FlightSearch filterdData={filterdData} />
      <Testimonials testimonials={testimonials} />
    </div>
  )
}


Home.getLayout = function getLayout(page) {
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
    }
  }
};