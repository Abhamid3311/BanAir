import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { ToastContainer } from 'react-toastify'
import { RootLayoutProps } from '../RootLayout'

export default function AdminLayout({ children }: RootLayoutProps) {
    return (
        <div>
            <>
                <AdminHeader />
                <div className='flex '>
                    <AdminSidebar />
                    <div className='w-full'>
                        {children}
                    </div>
                </div>
                <ToastContainer />

            </>
        </div>
    )
}
