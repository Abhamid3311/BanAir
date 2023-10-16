import UserDashboardLayout from '@/components/layouts/UserDashboardLayout';
import { auth } from '@/components/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSession } from "next-auth/react"
import { FaUserCircle } from 'react-icons/fa';

export default function Profile() {
    const [user] = useAuthState(auth);
    const { data: session } = useSession();

    console.log(session)

    return (
        <div className='bg-lightBg text-textClr p-5  min-h-screen w-full'>
            <h1 className='text-2xl font-bold text-primary mb-4'>Profile</h1>

            <div>
                <div>
                    {!session?.user?.image ?
                        <FaUserCircle className="text-3xl text-secondary " />
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


Profile.getLayout = function getLayout(page) {
    return <UserDashboardLayout>{page}</UserDashboardLayout>;
};