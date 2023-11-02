import { FlightType } from '@/components/utils/Types';
import React from 'react';
import AvailableFlightCard from './AvailableFlightCard';

const AvailableFlights = ({ flights }: { flights: FlightType[] }) => {
    // console.log(flights);




    return (
        <div className='max-w-7xl mx-auto min-h-screen'>
            <div className='text-center '>
                <p className='text-secondary text-sm font-bold uppercase'>Available Flights</p>
                <h1 className='text-2xl lg:text-3xl font-bold '>Check Recents Flight</h1>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-10 px-5 lg:px-0'>
                {
                    flights.map((flight, index) => <AvailableFlightCard key={index} flight={flight} />)
                }
            </div>
        </div>
    );
};

export default AvailableFlights;