import RootLayout from '@/components/layouts/RootLayout'
import Banner from '@/components/UI/Home/Banner';
import FlightSearch from '@/components/UI/Home/FlightSearch';
import { baseUrl } from '@/components/utils/url';
import { AirportType, FlightType, IFlightDeal, ITestimonial } from '@/components/utils/Types';
import Testimonials from '@/components/UI/Home/Testimonials';
import Destinations from '@/components/UI/Home/Destinations';
import Packages from '@/components/UI/Home/Packages';
import Plans from '@/components/UI/Home/Plans';
import BackToTopButton from '@/components/UI/PAges/BackToTopButton';


export default function Home({ flightsPackage, filterdData, testimonials, airports, flights }: { flightsPackage: IFlightDeal[], filterdData: IFlightDeal[], testimonials: ITestimonial[], airports: AirportType[], flights: FlightType[] }) {
  // console.log(flights);


  return (
    <div>
      <Banner />
      <FlightSearch filterdData={filterdData} airports={airports} flights={flights} />
      <Destinations />
      <Packages flights={flightsPackage} />
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


  const res3 = await fetch(`http://api.aviationstack.com/v1/airports?access_key=${process.env.AIRPORT_API_KEY}&limit=100`);
  const res4 = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${process.env.AIRPORT_API_KEY}`);

  // const getSearchedData
  const airportData = await res3.json();
  const flightData = await res4.json();

  // Sort the airport data by airport_name in ascending order (A to Z)
  airportData.data.sort((a: AirportType, b: AirportType) => {
    if (a.airport_name < b.airport_name) return -1;
    if (a.airport_name > b.airport_name) return 1;
    return 0;
  });

  // console.log(data1);


  const shuffledFlights = [...data].sort(() => Math.random() - 0.5);
  const selectedFlights = shuffledFlights.slice(0, 5);

  return {
    props: {
      flightsPackage: data,
      filterdData: selectedFlights,
      testimonials: data1,
      airports: airportData.data,
      flights: flightData.data,
    },
    revalidate: 60,
  }
};