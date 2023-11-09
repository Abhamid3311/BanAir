import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiUser } from 'react-icons/hi';
import Link from 'next/link';
import { useSession } from "next-auth/react"
import { useAuthState, } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '@/components/utils/firebase';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/features/users/userSlice';
import { BiLogOutCircle, BiSolidCommentDetail, BiSolidPackage } from 'react-icons/bi';
import { RxBorderWidth } from 'react-icons/rx';
import { LuPackagePlus } from 'react-icons/lu';

export default function AdminSidebar() {
    const { data: session } = useSession();
    const [user] = useAuthState(auth);
    const router = useRouter();
    const dispatch = useAppDispatch();


    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
            router.push("/")
        })
    }

    return (
        <div>
            <Sidebar aria-label="Sidebar with logo branding example">

                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item icon={HiChartPie} ><Link href="/Admin-dashboard"> Overview</Link> </Sidebar.Item>
                        <Sidebar.Item icon={HiUser} ><Link href="/Admin-dashboard/user-managment">Users</Link></Sidebar.Item>

                        <Sidebar.Item icon={BiSolidPackage} >
                            <Link href="/Admin-dashboard/package-managment">Packages</Link>
                        </Sidebar.Item>

                        <Sidebar.Item icon={LuPackagePlus} >
                            <Link href="/Admin-dashboard/package-managment/add-package">Add Packages</Link>
                        </Sidebar.Item>

                        <Sidebar.Item icon={RxBorderWidth} >
                            <Link href="/Admin-dashboard/booking-managment">Booking</Link>
                        </Sidebar.Item>

                        <Sidebar.Item icon={BiSolidCommentDetail} >
                            <Link href="/Admin-dashboard/testimonial-managment">Reviews</Link>
                        </Sidebar.Item>
                        
                    </Sidebar.ItemGroup>

                    <Sidebar.ItemGroup>
                        {/* <Sidebar.Item icon={HiUser} ><Link href="/Admin-dashboard/profile">Profile </Link> </Sidebar.Item> */}
                        <Sidebar.Item icon={BiLogOutCircle} onClick={() => handleLogout()}><button> Logout</button> </Sidebar.Item>
                    </Sidebar.ItemGroup>

                </Sidebar.Items>
            </Sidebar>


        </div>
    )
}
