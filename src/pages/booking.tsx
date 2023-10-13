import Destinations from '@/components/UI/Home/Destinations';
import PageBanner from '@/components/UI/PAges/PageBanner';
import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const Booking = ({ realFlights }) => {
    console.log(realFlights);

    return (
        <div className='bg-lightBg'>
            <PageBanner>Bookings </PageBanner>

            <div className=''>

                <Destinations />

            </div>
        </div>
    );
};

export default Booking;


Booking.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};





export const getStaticProps = async () => {
    const res = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${process.env.AIRPORT_API_KEY}&limit=100`);
    const data = await res.json();

    return {
        props: {
            realFlights: data.data,
        }
    }
};