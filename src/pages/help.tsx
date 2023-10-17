import PageBanner from '@/components/UI/PAges/PageBanner'
import RootLayout from '@/components/layouts/RootLayout';
import Link from 'next/link';
import React from 'react'
import { BsChatDots, BsPatchQuestion, BsPatchQuestionFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';

export default function Help() {
    return (
        <div className='bg-lightBg'>
            <PageBanner>
                <div className='text-center '>
                    <h1 className='text-5xl font-bold  '>Help & Support</h1>
                    <p className='text-semibold   mt-2'><Link href={"/"}>HOME</Link> / <span className='text-secondary'>HELP</span></p>
                </div>
            </PageBanner>

            <div className=' '>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10  py-10 px-5 max-w-7xl mx-auto lg:px-0'>

                    <div className='w-full  bg-white p-5 rounded shadow-md hover:shadow-lg '>
                        <div className='text-center h-48  flex flex-col items-center justify-center w-full'>
                            <BsPatchQuestion className='text-5xl text-primary' />
                            <h1 className='text-md lg:text-lg font-bold mb-1 '>General queries</h1>
                            <p className='text-2xl lg:text-3xl '><a href='callto:+880198564785'>+880198564785</a></p>
                        </div>
                    </div>

                    <div className='w-full  bg-white p-5 rounded shadow-md hover:shadow-lg'>
                        <div className='text-center h-48 w-full flex flex-col items-center justify-center'>
                            <BsChatDots className='text-5xl text-primary' />
                            <h1 className='text-md lg:text-lg font-bold mb-1 '>Live Chat</h1>
                            <p className='text-2xl lg:text-3xl'><a href='callto:+880198564785'>+88098564785</a></p>
                        </div>
                    </div>

                    <div className='w-full  bg-white p-5 rounded shadow-md hover:shadow-lg'>
                        <div className='text-center h-48 w-full flex flex-col items-center justify-center'>
                            <BiSupport className='text-5xl text-primary' />
                            <h1 className='text-md lg:text-lg font-bold mb-1'>Support Center</h1>
                            <p className='text-2xl lg:text-3xl '><a href='callto:+880198564785'>+880458564785</a></p>
                        </div>
                    </div>
                </div>



                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.629883149345!2d89.53923237503466!3d22.816174323999522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9b88661bd67d%3A0x75a5a08dd1a4aa9f!2sSonadanga%20Bus%20Terminal!5e0!3m2!1sen!2sbd!4v1697258631303!5m2!1sen!2sbd" height="500" loading="lazy" className='w-full'></iframe>
                </div>

            </div>
        </div>
    )
}



Help.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
};