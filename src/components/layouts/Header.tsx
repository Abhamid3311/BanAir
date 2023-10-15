import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { useSession, signIn, signOut } from "next-auth/react"


export default function Header() {
    const { data: session } = useSession();

    console.log(session?.user);

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


            <div className="flex md:order-2">

                {
                    session?.user ?
                        <Dropdown arrowIcon={false} inline label={<FaUserCircle className="text-3xl text-secondary " />} >
                            <Dropdown.Header>
                                <span className="block text-sm">Bonnie Green</span>
                                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                            </Dropdown.Header>
                            <Dropdown.Item> <Link href={"/dashboard"}>Dashboard</Link></Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={()=>signOut()}>Sign out</Dropdown.Item>
                        </Dropdown>
                        :
                        <Link href={"/signUp"}>
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
