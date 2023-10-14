import Destinations from '@/components/UI/Home/Destinations';
import PageBanner from '@/components/UI/PAges/PageBanner'
import RootLayout from '@/components/layouts/RootLayout';
import Link from 'next/link';
import React from 'react'

export default function AboutPage() {
    return (
        <div className='bg-lightBg'>
            <PageBanner>
                <div className='text-center '>
                    <h1 className='text-5xl font-bold  '>About Us</h1>
                    <p className='text-semibold   mt-2'><Link href={"/"}>HOME</Link> / <span className='text-secondary'>ABOUT US</span></p>
                </div>
            </PageBanner>

            <div>
                <Destinations />
            </div>

        </div>
    )
}


AboutPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};