import UserDashboardLayout from '@/components/layouts/user/UserDashboardLayout';
import { auth } from '@/components/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSession } from "next-auth/react"
import { FaUserCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useGetSingleUsersQuery } from '@/redux/features/users/userApi';

export default function Profile() {
    const [user] = useAuthState(auth);
    const { data: session } = useSession();
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (user?.email) {
            setEmail(user.email)
        }

    }, [user])
    const { data: profileUser, isLoading } = useGetSingleUsersQuery(email);



    console.log(profileUser)

    // console.log(session)

    return (
        <div className='bg-lightBg text-textClr p-5  min-h-screen w-full'>
            <h1 className='text-2xl font-bold text-primary mb-4'>Profile</h1>

            <div>
                <div>
                    {!session?.user?.image ?
                        <FaUserCircle className="text-5xl text-secondary " />
                        : <img src={`${session?.user?.image}`} alt="" srcSet="" className='w-[120px] h-[120px] rounded-full' />
                    }
                </div>
                <div className='mt-4 bg-white shadow-md p-5 rounded-md'>
                    <h2> Name: {session?.user?.name}</h2>
                    <h2> Email: {session?.user?.email}</h2>
                    <h2> Phone Number: </h2>
                </div>
            </div>

        </div>
    )
}


Profile.getLayout = function getLayout(page: React.ReactNode) {
    return <UserDashboardLayout>{page}</UserDashboardLayout>;
};