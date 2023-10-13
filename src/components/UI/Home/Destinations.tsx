import { Button } from 'flowbite-react';
import Link from 'next/link';
import { BsGlobe } from 'react-icons/bs';
import { PiUsersFourBold } from "react-icons/pi";

const Destinations = () => {



    return (
        <div className=" text-white h-full py-14 bg-lightBg  destination-banner ">

            <div className=" max-w-7xl mx-auto px-5 lg:px-0 flex items-center  ">
                <div className="w-full lg:w-1/2 py-10 lg:py-0">
                    <span className='px-5 font-semibold py-1 bg-secondary rounded-full '>OFFER DEALS</span>
                    <h1 className="text-2xl lg:text-5xl font-bold text-start my-3 w-full">Your Great Destination</h1>
                    <p className="text-sm lg:text-base">Get rewarded for your travels – unlock instant savings of 10% or more with a free Geairinfo.com account</p>

                    <div className='flex items-center gap-6 my-5 w-full jus'>
                        <div className='flex items-center justify-between gap-10 bg-white rounded-md p-4'>
                            <div >
                                <h2 className='text-4xl font-bold text-textClr'>7200+</h2>
                                <p className='text-primary text-sm lg:text-base'>Happy Customers</p>
                            </div>

                            <PiUsersFourBold className="text-4xl text-primary" />
                        </div>


                        <div className='flex items-center justify-between gap-10 bg-white rounded-md p-4'>
                            <div >
                                <h2 className='text-4xl font-bold text-textClr'>100%</h2>
                                <p className='text-primary text-sm lg:text-base'>Client Setisfied</p>
                            </div>

                            <BsGlobe className="text-4xl text-primary" />
                        </div>
                    </div>

                    <p>Discover the latest offers & news and start planning  <span className='bg-secondary px-3 py-1 rounded-full text-white text-bold ml-2'><Link href={"/"}>CONTACT US</Link></span>    </p>






                </div>
            </div>
        </div >
    )
};

export default Destinations;