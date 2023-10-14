import Login from '@/components/UI/Login/Login'
import Header from '@/components/layouts/Header'
import React from 'react'

export default function LoginPage() {
    return (
        <>
            <Header />
            <div className="bg-lightBg flex flex-col  items-center justify-center h-[100vh]">
                <Login />
            </div>
        </>
    )
}
