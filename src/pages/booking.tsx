import PageBanner from '@/components/UI/PAges/PageBanner';
import SearchFlights from '@/components/UI/bookingPage/SearchFlights';
import RootLayout from '@/components/layouts/RootLayout';
import { AirportType, FlightType } from '@/components/utils/Types';
import Link from 'next/link';



const Booking = ({ airports, flights }: { airports: AirportType[], flights: FlightType[] }) => {


    return (
        <div className='bg-lightBg'>
            <PageBanner>
                <div className='text-center '>
                    <h1 className='text-5xl font-bold  '>Bookings</h1>
                    <p className='text-semibold   mt-2'><Link href={"/"}>HOME</Link> / <span className='text-secondary'>BOOKING</span></p>
                </div>
            </PageBanner>
            <SearchFlights airports={airports} flights={flights} />


        </div>
    );
};

export default Booking;


Booking.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
};





export const getStaticProps = async () => {
    const res1 = await fetch(`http://api.aviationstack.com/v1/airports?access_key=${process.env.AIRPORT_API_KEY}&limit=100`);
    const res2 = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${process.env.AIRPORT_API_KEY}&limit=100`);
    const airportData = await res1.json();
    const flightData = await res2.json();


    return {
        props: {
            airports: airportData.data,
            flights: flightData.data,
        }
    }
};