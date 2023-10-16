import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import React from 'react'

export default function DealsManagment() {
    return (
        <div>deals-managment</div>
    )
}


DealsManagment.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};