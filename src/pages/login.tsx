import Login from '@/components/UI/Login/Login'
import Header from '@/components/layouts/Header'
import RootLayout from '@/components/layouts/RootLayout';
import React from 'react'

export default function LoginPage() {
    return (
        <>
            <div className="bg-lightBg flex flex-col  items-center justify-center h-[100vh]">
                <Login />
            </div>
        </>
    )
}

LoginPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
