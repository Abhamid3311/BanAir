import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';


export default function Header() {
    const { data: session } = useSession();
    const [user] = useAuthState(auth);

    // console.log(user);

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
                    (session?.user) ?
                        <Dropdown arrowIcon={false} inline label={!session?.user?.image ? <FaUserCircle className="text-3xl text-secondary " /> : <img src={`${session.user.image}`} alt="" srcSet="" className='w-[32px] h-[32px] rounded-full' />

                        } >
                            <Dropdown.Header>
                                <span className="block text-sm">{session?.user?.name || "User"}</span>
                                <span className="block truncate text-sm font-medium">{session?.user?.email || user?.email}</span>
                            </Dropdown.Header>
                            <Dropdown.Item> <Link href={"/dashboard"}>Dashboard</Link></Dropdown.Item>
                            <Dropdown.Item> <Link href={"/dashboard/profile"}>Profile</Link></Dropdown.Item>
                            <Dropdown.Item> <Link href={"/dashboard/feedback"}>Feedback</Link></Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
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
