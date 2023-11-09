import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import React from 'react'

export default function AddPackage() {
    return (
        <div>add-package</div>
    )
};


AddPackage.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};