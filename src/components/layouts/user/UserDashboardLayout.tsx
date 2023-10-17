import React, { useEffect } from 'react'
import { RootLayoutProps } from '../RootLayout'
import Header from '../Header'
import Sidebars from './Sidebar'
import DashboardHeader from './DashboardHeader'
import { ToastContainer } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setLoading, setUser } from '@/redux/features/users/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/components/utils/firebase';
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import RequireRole from '../PrivateRoute'

export default function UserDashboardLayout({ children }: RootLayoutProps) {
    const { data: session } = useSession();
    const dispatch = useAppDispatch();
    const router = useRouter();


    useEffect(() => {
        dispatch(setLoading(true));

        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user.email)
                dispatch(setUser(user?.email));
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(false))
            }
        });

    }, [dispatch]);

    useEffect(() => {
        if (session) {
            dispatch(setUser(session?.user?.email));
            dispatch(setLoading(false));
        } else {
            dispatch(setLoading(false))
        }

    }, [session, dispatch]);


    return (
        <div>
            <>

                <DashboardHeader />
                <div className='flex '>
                    <Sidebars />
                    <div className='w-full'>
                        {children}
                    </div>
                </div>
                <ToastContainer />

            </>

        </div>
    )
}
