import { IFlightDeal } from "@/components/utils/Types";
import FlightCard from "../PAges/FlightCard";

export default function Packages({ flights }: { flights: IFlightDeal[] }) {
    return (
        <div className='bg-lightBg text-textClr py-10'>
            <div className=" max-w-7xl mx-auto px-5 lg:px-0">
                <div>
                    <p className='text-secondary text-sm font-bold'>FLYNEXT PACKAGE</p>
                    <h1 className='text-3xl font-bold '>Your Great Destination</h1>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 mt-10">
                    {
                        flights.map(flight => <FlightCard key={flight.id} flight={flight} />).slice(0, 8)
                    }



                </div>

            </div>

        </div>
    )
}
