import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import React from 'react'

export default function PackageDetails() {
    return (
        <div>PackageDetails</div>
    )
};


PackageDetails.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};