import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import React from 'react'

export default function EditPackage() {
    return (
        <div>EditPackages</div>
    )
};

EditPackage.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};
