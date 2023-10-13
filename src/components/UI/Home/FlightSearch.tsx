import React, { useState, useEffect } from 'react'
import { serviceOffer } from '../../utils/StaticData';
import Image from 'next/image';
import { IFlightDeal } from '../../utils/Types';

export default function FlightSearch({ flights, filterdData }: { flights: IFlightDeal[], filterdData: IFlightDeal[] }) {


    return (
        <div className='bg-lightBg text-textClr min-h-screen'>
            <div className=''>
                <FlightDeal />
                <FlightOfferDeal randomFlights={filterdData} />
            </div>
        </div>
    )
}





const FlightDeal = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 max-w-7xl mx-auto px-5 lg:px-0 py-10 lg:py-20'>
            {
                serviceOffer.map(data => <div key={data.id} className='bg-white text-primary p-5 rounded-md w-full flex items-center gap-3 shadow-md hover:shadow-xl'>
                    <Image src={data.icon} alt={data.title} width={53} height={53} />
                    <div>
                        <h1 className='text-2xl font-bold text-textClr'>{data.title}</h1>
                        <p>{data.desc}</p>
                    </div>

                </div>)
            }

        </div>
    );
};



const FlightOfferDeal = ({ randomFlights }: { randomFlights: IFlightDeal[] }) => {

    const firstValue = randomFlights[0];
    const otherFourValue = randomFlights?.filter(data => data.id !== firstValue.id);

    // console.log(firstValue, otherFourValue)


    return (
        <div className='max-w-7xl mx-auto px-5 lg:px-0 py-10'>
            <div>
                <p className='text-secondary text-sm font-bold'>FEATURED DEALS</p>
                <h1 className='text-3xl font-bold '>Flight Offer Deals</h1>
            </div>

            <div className='flex flex-col lg:flex-row items-start gap-5 lg:gap-6 my-8'>
                <div className='w-full lg:w-1/2'>
                    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow ">
                        <a href="#">
                            <img className="rounded-t-lg w-full h-full lg:h-[460px]" src={firstValue?.img} alt="" />
                        </a>
                        <div className="p-4">
                            <h1 className=" text-2xl font-bold tracking-tight text-gray-900 ">{`${firstValue?.from} to ${firstValue?.to}`}</h1>
                            <p className=' mb-2 text-primary'> <span className='font-bold mr-1'>{firstValue?.startDate}</span> to <span className='font-bold ml-1'>{firstValue?.endDate}</span> </p>

                            <p className='text-sm lg:text-base  text-primary'>{firstValue?.type} From</p>
                            <h3 className='text-xl font-bold'>${firstValue?.price}</h3>
                        </div>
                    </div>
                </div>


                <div className='w-full lg:w-1/2  grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-6'>
                    {
                        otherFourValue.map(data => <FlightCard key={data?.id} data={data} />)
                    }

                </div>
            </div>

        </div>
    );
};



const FlightCard = ({ data }) => {
    const { id, from, to, startDate, endDate, price, img, type } = data;
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
            <a href="#">
                <Image className="rounded-t-lg w-full h-[148px]" src={img} alt="" width={244} height={148} />
            </a>
            <div className="p-2 lg:p-4">
                <h1 className=" text-base lg:text-xl font-bold tracking-tight text-gray-900 ">{`${from} to ${to}`}</h1>
                <p className='text-xs lg:text-sm  mb-2 text-primary'> <span className='font-bold '>{startDate}</span> to <span className='font-bold '>{endDate}</span> </p>

                <p className='text-xs lg:text-sm  text-primary'>{type} From</p>
                <h3 className='text-lg font-bold'>${price}</h3>
            </div>
        </div>

    );
};


