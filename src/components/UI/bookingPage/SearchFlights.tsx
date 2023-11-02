import { BookingProps } from "@/components/utils/Types";
import { Datepicker } from "flowbite-react";


const SearchFlights: React.FC<BookingProps> = ({ airports }) => {

    console.log(airports)


    return (
        <div className='min-h-screen my-10 max-w-7xl mx-auto'>
            <div className='bg-white p-4 rounded-md shadow-md'>
                <h1 className='text-3xl font-bold text-primary text-center'>Search Flights</h1>
                <form className='py-5'>

                    <div className='flex flex-col lg:flex-row items-center gap-5 w-full'>
                        <div className="relative w-full">
                            <select id="floating_outlined4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-yellow-400 peer">
                                <option selected disabled>Choose Departure Airport</option>
                                {
                                    airports.map(arrival => <option key={arrival.id} value={arrival.airport_name}>{`${arrival.airport_name}, ${arrival.country_name}`}</option>)
                                }
                            </select>

                            <label htmlFor="floating_outlined1" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Departure Airport</label>
                        </div>


                        <div className="relative w-full">
                            <select id="floating_outlined4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-yellow-400 peer">
                                <option selected disabled>Choose Arrival Airport</option>
                                {
                                    airports.map(arrival => <option key={arrival.id} value={arrival.airport_name}>{`${arrival.airport_name}, ${arrival.country_name}`}</option>)
                                }
                            </select>

                            <label htmlFor="floating_outlined4" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Arrival Airport</label>
                        </div>

                        <div className="relative w-full">
                            <select id="floating_outlined5" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-yellow-400 peer">
                                <option selected disabled>Choose Flight Types</option>
                                <option value="Economy Class">Economy Class</option>
                                <option value="Premium Economy">Premium Economy</option>
                                <option value="Premium Economy">Business Class</option>
                                <option value="Premium Economy">First Class</option>
                            </select>
                            <label htmlFor="floating_outlined4" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Flight Types</label>
                        </div>
                    </div>


                    <div className='flex flex-col lg:flex-row items-center gap-5 w-full mt-5 mb-3' >
                        <div className="relative w-full">
                            <select id="floating_outlined4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-yellow-400 peer">
                                <option selected disabled>Choose Passengers</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>

                            <label htmlFor="floating_outlined5" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Passengers</label>
                        </div>

                        <div className="relative w-full">
                            <Datepicker title="Select Departing Date" className="py-4" />

                            <label htmlFor="floating_outlined3" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Departing Date</label>
                        </div>

                        <div className="relative w-full ">
                            <Datepicker title="Select Returning Date" className="py-4" />

                            <label htmlFor="floating_outlined3" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-yellow-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Returning Date</label>
                        </div>
                    </div>



                    <div className="flex items-center justify-center">
                        <button type='submit' className='text-base lg:text-lg bg-secondary text-white shadow-sm hover:shadow-lg  text-center py-2.5 px-4 rounded-md'>SEARCH FLIGHT</button>
                    </div>

                </form>
            </div>
        </div>
    )
};


export default SearchFlights;