import React, { useState, useEffect } from 'react'
import { serviceOffer } from '../../utils/StaticData';
import Image from 'next/image';
import { IFlightDeal } from '../../utils/Types';
import Link from 'next/link';
import { Button } from 'flowbite-react';

export default function FlightSearch({ filterdData }: { filterdData: IFlightDeal[] }) {


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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 max-w-7xl mx-auto px-5 lg:px-0 py-10 lg:py-20'>
            {
                serviceOffer.map(data => <div key={data.id} className='bg-white text-primary p-5 rounded-md w-full flex items-center gap-3 shadow-md hover:shadow-xl'>
                    <Image src={data.icon} alt={data.title} width={53} height={53} />
                    <div>
                        <h1 className='text-lg lg:text-2xl font-bold text-textClr'>{data.title}</h1>
                        <p className='text-sm lg:text-base'>{data.desc}</p>
                    </div>

                </div>)
            }

        </div>
    );
};



const FlightOfferDeal = ({ randomFlights }: { randomFlights: IFlightDeal[] }) => {

    const firstValue = randomFlights[0];
    const otherFourValue = randomFlights?.filter(data => data._id !== firstValue._id);

    // console.log(firstValue, otherFourValue)


    return (
        <div className='max-w-7xl mx-auto px-5 lg:px-0 py-10'>
            <div>
                <p className='text-secondary text-sm font-bold'>FEATURED DEALS</p>
                <h1 className='text-2xl lg:text-3xl font-bold '>Flight Offer Deals</h1>
            </div>

            <div className='flex flex-col lg:flex-row items-start gap-5 lg:gap-6 my-8'>
                <div className='w-full lg:w-1/2'>
                    <Link href={`/package-details/${firstValue?._id}`}>
                        <div className="w-full  bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl ">
                            <a href="#">
                                <img className="rounded-t-lg w-full h-full md:h-[300px] lg:h-[460px]" src={firstValue?.img} alt="" />
                            </a>
                            <div className="p-4">
                                <h1 className=" text-xl lg:text-2xl font-bold tracking-tight text-gray-900 ">{`${firstValue?.from} to ${firstValue?.to}`}</h1>
                                <p className=' mb-2 text-primary'> <span className='font-semibold mr-1'>{firstValue?.startDate}</span> to <span className='font-semibold ml-1'>{firstValue?.endDate}</span> </p>

                                <p className='text-sm lg:text-base  text-primary'>{firstValue?.type} From</p>
                                <h3 className='text-xl font-bold mb-3'>${firstValue?.price}</h3>

                                <Link
                                    href={`/booking-now/${firstValue?._id}`}
                                    className='px-3 py-1 border-[1px] border-secondary text-secondary rounded-md bg-white hover:bg-secondary hover:text-textClr  '>
                                    Book Now</Link>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className='w-full lg:w-1/2  grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-6'>
                    {
                        otherFourValue.map(data => <FlightCard key={data?._id} data={data} />)
                    }

                </div>
            </div>

        </div >
    );
};



const FlightCard = ({ data }: { data: IFlightDeal }) => {
    const { _id, from, to, startDate, endDate, price, img, type } = data;
    return (
        <Link href={`/package-details/${_id}`}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl">
                <a href="#">
                    <Image className="rounded-t-lg w-full h-[148px]" src={img} alt="" width={244} height={148} />
                </a>
                <div className="p-2 lg:p-4">
                    <h1 className=" text-base lg:text-xl font-bold tracking-tight text-gray-900 ">{`${from} to ${to}`}</h1>
                    <p className='text-xs lg:text-sm  mb-2 text-primary'> <span className='font-bold '>{startDate}</span> - <span className='font-bold '>{endDate}</span> </p>

                    <p className='text-xs lg:text-sm  text-primary'>{type} From</p>
                    <h3 className='text-lg font-bold mb-2'>${price}</h3>

                    <Link
                        href={`/booking-now/${_id}`}
                        className='px-3 py-1 border-[1px] border-secondary text-secondary rounded-md bg-white hover:bg-secondary hover:text-textClr'>
                        Book Now</Link>
                </div>

            </div>
        </Link>
    );
};


