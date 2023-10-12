import { Button } from 'flowbite-react'
import RootLayout from '@/components/layouts/RootLayout'
import Banner from '@/components/UI/Banner';
import FlightSearch from '@/components/UI/FlightSearch';


export default function Home() {
  return (
    <div>
      <Banner />
      <FlightSearch />
    </div>
  )
}


Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};