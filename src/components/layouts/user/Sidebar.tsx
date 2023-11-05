import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import Link from 'next/link';
import { useAuthState, } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useSession, signOut as nextAuthSignOut } from "next-auth/react"


export default function Sidebars() {
    const { data: session } = useSession();
    const [user] = useAuthState(auth);
    const router = useRouter();


    const handleLogout = () => {
        if (user) {
            signOut(auth);
            router.push("/")

        } else if (session) {
            nextAuthSignOut();
            router.push("/")
        }
    }

    return (
        <div>
            <Sidebar aria-label="Sidebar with logo branding example">

                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item icon={HiChartPie} ><Link href="/dashboard"> Dashboard</Link> </Sidebar.Item>

                        <Sidebar.Item icon={HiInbox} ><Link href="/dashboard/booking-history">History</Link></Sidebar.Item>
                        <Sidebar.Item icon={HiUser} ><Link href="/dashboard/feedback">  Feedback</Link> </Sidebar.Item>


                    </Sidebar.ItemGroup>

                    <Sidebar.ItemGroup>
                        <Sidebar.Item icon={HiUser} ><Link href="/dashboard/profile"> Profile</Link> </Sidebar.Item>
                        <Sidebar.Item icon={HiViewBoards} ><Link href="/dashboard/settings">Settings</Link> </Sidebar.Item>
                        <Sidebar.Item icon={HiShoppingBag} onClick={handleLogout}><button> Logout</button> </Sidebar.Item>
                    </Sidebar.ItemGroup>

                </Sidebar.Items>
            </Sidebar>


        </div>
    )
}
