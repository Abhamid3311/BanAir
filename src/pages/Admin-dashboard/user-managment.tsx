import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import React from 'react'

export default function UserManagment() {
    return (
        <div>user-managment</div>
    )
}


UserManagment.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};