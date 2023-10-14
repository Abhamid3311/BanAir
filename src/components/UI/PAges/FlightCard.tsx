import { IFlightDeal } from '@/components/utils/Types'
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { TbArrowsExchange } from 'react-icons/tb'

export default function FlightCard({ flight }: { flight: IFlightDeal }) {
    console.log(flight);

    const { id, from, to, startDate, endDate, price, img, type, desc, ratings, status } = flight;


    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow-md card">
            <div className='overlay'>
                <div>
                    <div className="p-2 lg:p-4 text-start text-white">
                        <div>
                            <h1 className=" text-base lg:text-xl font-bold tracking-tight  ">{from} to {to}</h1>
                            <p className='text-sm lg:text-base'>Status: {status}</p>
                            <p className='text-sm lg:text-base'>Ratings: {ratings} Stars</p>
                        </div>

                        <hr className='my-2' />
                        <div className='text-start'>
                            <p className='text-xs lg:text-sm  '>{type} From</p>
                            <h3 className='text-xl font-bold text-secondary '>${price}</h3>
                        </div>
                        <div className=' flex gap-3 mt-4 text-sm'>
                            <Link href={"/"} className='hover:bg-white bg-transparent hover:text-black text-white border-[1px] border-white rounded-md px-2 py-0.5'>Purchase Now</Link>
                            
                            <Link href={"/"} className='hover:bg-white bg-transparent hover:text-black text-white border-[1px] border-white rounded-md px-2 py-0.5'>View Details</Link>
                        </div>

                    </div>
                </div>

            </div>
            <div>
                <a href="#">
                    <Image className="rounded-t-lg w-full h-[168px]" src={img} alt="" width={244} height={148} />
                </a>
                <div className="p-2 lg:p-4 text-center text-primary">
                    <div>
                        <p className='text-xs lg:text-sm  mb-2 '> <span className='font-bold '>{startDate}</span> -- <span className='font-bold '>{endDate}</span> </p>

                        <h1 className=" text-base lg:text-xl font-bold tracking-tight  ">{from} </h1>
                        <div className='flex items-center justify-center '>
                            <TbArrowsExchange className="text-3xl" />
                        </div>
                        <h1 className=" text-base lg:text-xl font-bold tracking-tight "> {to}</h1>
                    </div>
                    <hr className='my-2' />


                    <div className='text-start'>
                        <p className='text-xs lg:text-sm  '>{type} From</p>
                        <h3 className='text-lg font-bold text-gray-900 '>${price}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
