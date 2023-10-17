import React, { useEffect } from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { ToastContainer } from 'react-toastify'
import { RootLayoutProps } from '../RootLayout'
import { useSession } from "next-auth/react"
import { useAppDispatch } from '@/redux/hooks'
import { setLoading, setUser } from '@/redux/features/users/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/components/utils/firebase'

export default function AdminLayout({ children }: RootLayoutProps) {
    const { data: session } = useSession();
    const dispatch = useAppDispatch();


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
                <AdminHeader />
                <div className='flex '>
                    <AdminSidebar />
                    <div className='w-full'>
                        {children}
                    </div>
                </div>
                <ToastContainer />
            </>
        </div>
    )
}
