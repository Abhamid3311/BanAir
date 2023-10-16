import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

export default function DashboardHeader() {
    return (
        <div>
            <Navbar className='bg-textClr'>
                <Navbar.Brand href="/">
                    <span className="self-center whitespace-nowrap text-2xl font-semibold text-secondary ">BanAir</span>
                </Navbar.Brand>

                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse className='text-white block lg:hidden'>

                    <Navbar.Link active><Link href="/dashboard" className='text-white'>Dashboard</Link></Navbar.Link>
                    <Navbar.Link ><Link href="/" className='text-white'>Settings</Link></Navbar.Link>
                    <Navbar.Link ><Link href="/" className='text-white'>History</Link></Navbar.Link>
                    <Navbar.Link ><Link href="/" className='text-white'>Feedback</Link></Navbar.Link>
                    <Navbar.Link ><Link href="/" className='text-white'>Profile</Link></Navbar.Link>
                    <Navbar.Link ><Link href="/" className='text-white'>Logout</Link></Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
