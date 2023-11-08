import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import React from 'react'

export default function BookingDetails() {
    return (
        <div>BookingDetails</div>
    )
}


BookingDetails.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};