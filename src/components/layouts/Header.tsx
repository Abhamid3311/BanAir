import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { useSession, signOut as nextAuthSignOut } from "next-auth/react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { auth } from '../utils/firebase';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setUser } from '@/redux/features/users/userSlice';
import { signOut } from 'firebase/auth';


export default function Header() {
    const { data: session } = useSession();
    const router = useRouter();
    const { user } = useAppSelector(state => state.user);
    console.log(user)
    const dispatch = useAppDispatch();




    //Handle Logout
    const handleLogout = () => {
        if (session) {
            nextAuthSignOut();
            dispatch(setUser(null));
        } else {
            signOut(auth).then(() => {
                dispatch(setUser(null));
            })
        }
    }


    return (
        <Navbar className='bg-textClr' >
            <Navbar.Brand href="/">
                {/*   <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="/favicon.svg"
                /> */}
                <span className="self-center whitespace-nowrap text-2xl font-semibold text-secondary">
                    BanAir
                </span>
            </Navbar.Brand>
            {/* <Image src={session?.user?.image} alt='' width={30} height={30} className='rounded-full' /> */}

            <div className="flex md:order-2">

                {
                    user.email ?
                        <Dropdown arrowIcon={false} inline label={<FaUserCircle className="text-3xl text-secondary " />} >


                            <Dropdown.Header>
                                <span className="block text-sm">{user.email || "User"}</span>
                            </Dropdown.Header>
                            <Dropdown.Item> <Link href={"/dashboard"}>Dashboard</Link></Dropdown.Item>
                            <Dropdown.Item> <Link href={"/dashboard/profile"}>Profile</Link></Dropdown.Item>
                            <Dropdown.Item> <Link href={"/dashboard/feedback"}>Feedback</Link></Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => handleLogout()}>Sign out</Dropdown.Item>
                        </Dropdown>
                        :
                        <Link href={"/login"}>
                            <Button color="warning" className="px-1 lg:px-2 font-bold ">
                                SignUp / Login
                            </Button>
                        </Link>

                }



                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
                <Navbar.Link active className='text-white active:text-secondary'><Link href={"/"}>HOME</Link></Navbar.Link>
                <Navbar.Link className='text-white active:text-secondary'><Link href={"/where-we-fly"}>OUR PACKAGES</Link></Navbar.Link>
                <Navbar.Link className='text-white active:text-secondary'><Link href={"/booking"}>BOOKING</Link></Navbar.Link>

                <Navbar.Link className='text-white active:text-secondary' ><Link href={"/about-us"}>ABOUT US </Link></Navbar.Link>
                {/* <Navbar.Link className='text-white active:text-secondary' ><Link href={"/"}>LOYALITY </Link></Navbar.Link> */}
                <Navbar.Link className='text-white active:text-secondary'><Link href={"/help"}>HELP </Link></Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
