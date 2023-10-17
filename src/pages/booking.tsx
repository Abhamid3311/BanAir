import PageBanner from '@/components/UI/PAges/PageBanner';
import RootLayout from '@/components/layouts/RootLayout';
import Link from 'next/link';
import React from 'react';

const Booking = () => {

    return (
        <div className='bg-lightBg'>
            <PageBanner>
                <div className='text-center '>
                    <h1 className='text-5xl font-bold  '>Bookings</h1>
                    <p className='text-semibold   mt-2'><Link href={"/"}>HOME</Link> / <span className='text-secondary'>BOOKING</span></p>
                </div>
            </PageBanner>

            <div className=''>



            </div>
        </div>
    );
};

export default Booking;


Booking.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
};





/* export const getStaticProps = async () => {
    const res = await fetch(`http://api.aviationstack.com/v1/airports?access_key=${process.env.AIRPORT_API_KEY}&limit=100`);
    // const res = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${process.env.AIRPORT_API_KEY}&limit=100`);
    const data = await res.json();

    return {
        props: {
            realFlights: data.data,
        }
    }
}; */