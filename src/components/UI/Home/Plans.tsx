import { experiencePlan } from '@/components/utils/StaticData'
import { IPlans } from '@/components/utils/Types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Plans() {
    return (
        <div className='bg-lightBg py-10'>
            <div className='max-w-7xl mx-auto px-5 lg:px-0 py-8  text-textClr'>
                <div>
                    <p className='text-secondary text-sm font-bold'>FLIGHT PLANS</p>
                    <h1 className='text-2xl lg:text-3xl font-bold '>Make It An Incredible Journey</h1>
                </div>

                <div className='flex flex-col lg:flex-row items-start gap-5 lg:gap-6 my-8'>
                    <div className='w-full lg:w-1/2'>
                        <div className="w-full  bg-white border border-gray-200 rounded-lg shadow flight-card">

                            <div className="p-4 text-start ">
                                <h1 className="text-sm lg:text-base  tracking-tight  mb-2 lg:mb-4 text-primary">DUBAI AND UAE</h1>
                                <p className=' text-gray-900 text-xl lg:text-4xl '>Discover Dubai </p>
                                <Link href="/" className='text-sm underline text-primary'>Learn More</Link>
                            </div>

                            <div  className='flight-card-img'>
                                <img className="rounded-b-lg w-full h-full lg:h-[360px]" src={"https://images.unsplash.com/photo-1582882198551-c0d7f863c5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NjI5NDk4fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} alt="" />
                            </div>
                        </div>
                    </div>


                    <div className='w-full lg:w-1/2  grid grid-cols-2 lg:grid-cols-2 gap-2 lg:gap-6'>
                        {
                            experiencePlan.map(data => <PlanCard key={data?.id} data={data} />)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
};


const PlanCard = ({ data }: { data: IPlans }) => {
    const { id, name, Title, subTitle, desc, img } = data;

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flight-card">

            <div className="p-2 lg:p-4 text-center">
                <h1 className="text-xs lg:text-sm  tracking text-gray-900 ">CABIN FEATURES</h1>
                <p className=' text-base lg:text-xl font-bold  mb-2 text-primary'> {name} </p>
            </div>

            <div className='flight-card-img'>
                <Image className="rounded-t-lg w-full h-[148px]" src={img} alt="" width={244} height={148} />
            </div>
        </div>
    );
};

