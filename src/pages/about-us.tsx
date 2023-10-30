import Destinations from '@/components/UI/Home/Destinations';
import Plans from '@/components/UI/Home/Plans';
import Testimonials from '@/components/UI/Home/Testimonials';
import PageBanner from '@/components/UI/PAges/PageBanner'
import RootLayout from '@/components/layouts/RootLayout';
import { ITestimonial } from '@/components/utils/Types';
import { baseUrl } from '@/components/utils/url';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import React from 'react'


export default function AboutPage({ testimonials }: { testimonials: ITestimonial[] }) {



    return (
        <div className='bg-lightBg'>
            <PageBanner>
                <div className='text-center '>
                    <h1 className='text-5xl font-bold  '>About Us</h1>
                    <p className='text-semibold   mt-2'><Link href={"/"}>HOME</Link> / <span className='text-secondary'>ABOUT US</span></p>
                </div>
            </PageBanner>

            <div className=''>
                <div className=' max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-3 lg:px-0 gap-5 py-10'>
                    <div className='w-full lg:w-1/2'>

                        <div className='my-3 mb-5'>
                            <p className='text-secondary text-sm font-bold'>WHO WE ARE</p>
                            <h1 className='text-2xl lg:text-4xl font-bold '>Magical Singapore now even more amazing!</h1>
                        </div>

                        <div>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elitIn interdum imperdiet ipsum. denounce with rieous indiation and dislike men who beguiled demor.</p>

                            <div className='mt-3 font-bold text-primary mb-5'>
                                <li>Pre-Book Your Baggage Donating</li>
                                <li>Accusamus Iusto Odio Dignissimos Ducimus</li>
                                <li>Dislike Men Who are so Beguiled</li>
                            </div>

                            <Link href={"/help"}><Button color='warning'>Contact Us</Button></Link>



                        </div>

                    </div>


                    <div className='w-full lg:w-1/2 relative'>
                        <img src="/assetes/about_img01.jpg" alt="" srcSet="" />

                        <div className='border-4 p-3 border-secondary absolute top-10 right-0 hidden lg:block'>
                            <img src="/assetes/about_img02.jpg" alt="" srcSet="" className='' />
                        </div>

                    </div>



                </div>
                <Destinations />
                <Testimonials testimonials={testimonials} />
                <Plans /> 
            </div>

        </div>
    )
}


AboutPage.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
};




export const getStaticProps = async () => {
    const res1 = await fetch(`${baseUrl}/testimonial`);
    const data1 = await res1.json();

    return {
        props: {
            testimonials: data1,
        }
    }
};