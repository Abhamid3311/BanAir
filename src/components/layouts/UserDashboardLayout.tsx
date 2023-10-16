import React from 'react'
import { RootLayoutProps } from './RootLayout'
import Header from './Header'
import Sidebars from './Sidebar'
import DashboardHeader from './DashboardHeader'
import { ToastContainer } from 'react-toastify'

export default function UserDashboardLayout({ children }: RootLayoutProps) {
    return (
        <div>
            <>
                <DashboardHeader />
                <div className='flex '>
                    <Sidebars />
                    <div className='w-full'>
                        {children}
                    </div>
                </div>
                <ToastContainer />

            </>

        </div>
    )
}
