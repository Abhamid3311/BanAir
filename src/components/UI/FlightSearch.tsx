import React from 'react'
import { serviceOffer } from '../utils/StaticData';
import Image from 'next/image';

export default function FlightSearch() {
    return (
        <div className='bg-lightBg text-textClr min-h-screen'>
            <div className=''>
                <div >

                </div>

                <FlightDeal />
                <FlightOfferDeal />

            </div>
        </div>
    )
}





const FlightDeal = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-5 lg:px-0 py-20'>
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



const FlightOfferDeal = () => {
    return (
        <div className='max-w-7xl mx-auto px-5 lg:px-0'>
            <div>
                <p className='text-secondary text-sm font-bold'>OFFER DEALS</p>
                <h1 className='text-3xl font-bold '>Flight Offer Deals</h1>
            </div>

        </div>
    );
};

