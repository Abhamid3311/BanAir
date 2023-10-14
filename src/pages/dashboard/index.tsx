import UserDashboardLayout from '@/components/layouts/UserDashboardLayout';
import React from 'react'

export default function DashboardPage() {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}


DashboardPage.getLayout = function getLayout(page) {
    return <UserDashboardLayout>{page}</UserDashboardLayout>;
};