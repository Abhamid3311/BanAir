import { Button } from 'flowbite-react'
import RootLayout from '@/components/layouts/RootLayout'
import Banner from '@/components/UI/Banner';
import FlightSearch from '@/components/UI/FlightSearch';
import { baseUrl } from '@/components/utils/url';
import { IFlightDeal } from '@/components/utils/Types';


export default function Home({ flights, filterdData }: { flights: IFlightDeal[], filterdData: IFlightDeal[] }) {
  // console.log(flights);


  return (
    <div>
      <Banner />
      <FlightSearch filterdData={filterdData} />
    </div>
  )
}


Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};



export const getStaticProps = async () => {
  const res = await fetch(`${baseUrl}/deal`);
  const data = await res.json();
  // console.log(data);

  const shuffledFlights = [...data].sort(() => Math.random() - 0.5);
  const selectedFlights = shuffledFlights.slice(0, 5);

  return {
    props: {
      flights: data,
      filterdData: selectedFlights
    }
  }
};