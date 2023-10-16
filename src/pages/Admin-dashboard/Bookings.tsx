import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import React from 'react'

export default function Bookings() {
    return (
        <div>Bookings</div>
    )
}


Bookings.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};