import React, { ReactNode, useEffect } from 'react'
import Header from './Header'
import Footers from './Footer';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from '@/redux/hooks';
import { onAuthStateChanged } from 'firebase/auth';
import { setLoading, setUser } from '@/redux/features/users/userSlice';
import { auth } from '../utils/firebase';
import { useSession } from "next-auth/react"

export interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
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
            dispatch(setUser({
                email: session?.user?.email,
            }));
            dispatch(setLoading(false));
        } else {
            dispatch(setLoading(false))
        }

    }, [session, dispatch])




    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footers />
            <ToastContainer />
        </>
    )
}
