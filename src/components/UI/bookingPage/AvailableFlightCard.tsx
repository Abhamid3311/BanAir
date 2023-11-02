import { FlightType } from '@/components/utils/Types';
import moment from 'moment';
import React from 'react';

const AvailableFlightCard = ({ flight }: { flight: FlightType }) => {
    // console.log(flight);

    const departureDate = moment(flight.departure.estimated).format("DD MMM, YYYY")
    const arrivalDate = moment(flight.arrival.estimated).format("DD MMM, YYYY")

    return (
        <div className='bg-primary text-white p-4 rounded-md shadow-sm hover:shadow-lg w-full'>
            <div className='text-sm lg:text-base'>
                <span className='bg-secondary text-white px-4 py-1 rounded-full capitalize text-sm text-center '>{flight.flight_status}</span>

                <p className='mt-2'>Date: {`${departureDate} -- ${arrivalDate}`}</p>


                <div className='flex items-center gap-2'>
                    <p>Airport:</p>
                    <h1>{flight.departure.airport}</h1>
                    <span className='text-secondary'>to</span>
                    <h1>{flight.arrival.airport}</h1>
                </div>



                <h2> Airlines: {flight.airline.name}</h2>
                <p></p>
            </div>


        </div>
    );
};

export default AvailableFlightCard;