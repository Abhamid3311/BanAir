import UserDashboardLayout from '@/components/layouts/user/UserDashboardLayout';
import { auth } from '@/components/utils/firebase';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSession } from "next-auth/react";

export default function Settings() {

    const [user] = useAuthState(auth);
    const { data: session } = useSession();

    console.log(session)
    return (
        <div className='bg-lightBg text-textClr p-5  min-h-screen w-full'>
            <h1 className='text-2xl font-bold text-primary mb-4'>Settings</h1>

            <div>



            </div>

        </div>
    )
}

Settings.getLayout = function getLayout(page) {
    return <UserDashboardLayout>{page}</UserDashboardLayout>;
};