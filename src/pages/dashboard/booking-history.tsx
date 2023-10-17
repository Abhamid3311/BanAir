import UserDashboardLayout from '@/components/layouts/user/UserDashboardLayout';
import React from 'react'

export default function BookingHistory() {
    return (
        <div className='bg-lightBg text-textClr p-5  min-h-screen w-full'>
            <h1 className='text-2xl font-bold text-primary mb-4'>Booking History</h1>

        </div>
    )
}

BookingHistory.getLayout = function getLayout(page) {
    return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
