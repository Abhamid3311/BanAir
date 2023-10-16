import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import React from 'react'

export default function AdminDashboard() {
    return (
        <div className='bg-lightBg text-textClr p-5  min-h-screen w-full'>
            <h1 className='text-2xl font-bold text-primary mb-4'>Overview</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='bg-white p-3 shadow-md rounded-md'>
                    <h2>Bookings</h2>
                    <p>0</p>
                </div>
                <div className='bg-white p-3 shadow-md rounded-md'>
                    <h2>Feedback</h2>
                    <p>0</p>
                </div>
                <div className='bg-white p-3 shadow-md rounded-md'>
                    <h2>Confirmed</h2>
                    <p>0</p>
                </div>
            </div>
        </div>
    )
}

AdminDashboard.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};
