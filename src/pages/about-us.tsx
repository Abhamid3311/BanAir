import Destinations from '@/components/UI/Home/Destinations';
import Testimonials from '@/components/UI/Home/Testimonials';
import PageBanner from '@/components/UI/PAges/PageBanner'
import RootLayout from '@/components/layouts/RootLayout';
import { ITestimonial } from '@/components/utils/Types';
import { baseUrl } from '@/components/utils/url';
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
                <div className='min-h-screen '>
                    About Us

                </div>
                <Destinations />
                <Testimonials testimonials={testimonials} />
            </div>

        </div>
    )
}


AboutPage.getLayout = function getLayout(page) {
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