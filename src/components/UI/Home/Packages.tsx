import { IFlightDeal } from "@/components/utils/Types";
import FlightCard from "../PAges/FlightCard";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function Packages({ flights }: { flights: IFlightDeal[] }) {
    return (
        <div className='bg-lightBg text-textClr py-10'>
            <div className=" max-w-7xl mx-auto px-5 lg:px-0">
                <div>
                    <p className='text-secondary text-sm font-bold'>FLYNEXT PACKAGE</p>
                    <h1 className='text-2xl lg:text-3xl font-bold '>Your Great Destination</h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mt-10">
                    {
                        flights.map(flight => <FlightCard key={flight._id} flight={flight} />).slice(0, 8)
                    }

                </div>
                <div className="flex items-center justify-center mt-7">
                    <Link href={"/where-we-fly"}><Button color="warning" className="px-4">VIEW MORE</Button></Link>
                </div>

            </div>
        </div>
    )
}
