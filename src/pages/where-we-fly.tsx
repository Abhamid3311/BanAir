import PageBanner from '@/components/UI/PAges/PageBanner'
import RootLayout from '@/components/layouts/RootLayout';
import Link from 'next/link';
import React from 'react'

export default function WhereWEFlyPage() {
    return (
        <div className='bg-lightBg'>
            <PageBanner>
                <div className='text-center '>
                    <h1 className='text-5xl font-bold  '>Where We Fly</h1>
                    <p className='text-semibold   mt-2'><Link href={"/"}>HOME</Link> / <span className='text-secondary'>WHERE WE FLY</span></p>
                </div>

            </PageBanner>
        </div>
    )
};

WhereWEFlyPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
