import { IFlightDeal } from '@/components/utils/Types'
import Image from 'next/image';
import { TbArrowsExchange } from 'react-icons/tb'

export default function FlightCard({ flight }: { flight: IFlightDeal }) {
    const { id, from, to, startDate, endDate, price, img, type } = flight;


    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
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
    )
}
