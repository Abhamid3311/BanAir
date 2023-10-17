import { useGetSingleUsersQuery } from '@/redux/features/users/userApi';
import { useAppSelector } from '@/redux/hooks';
import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

export default function DashboardHeader() {
    const { user } = useAppSelector(state => state.user);

    const { data } = useGetSingleUsersQuery(user.email);
    // console.log(data)

    return (
        <div>
            <Navbar className='bg-textClr'>
                <Navbar.Brand href="/">
                    <span className="self-center whitespace-nowrap text-2xl font-semibold text-secondary ">BanAir</span>
                </Navbar.Brand>

                <div className="flex">
                    <div className='text-white text-xl font-bold'>User</div>
                    {/* <Navbar.Toggle /> */}
                </div>

                {/*   <div className='block lg:hidden'>
                    <Navbar.Collapse className='text-white'>

                        <Navbar.Link active><Link href="/dashboard" className='text-white'>Dashboard</Link></Navbar.Link>

                        <Navbar.Link ><Link href="/" className='text-white'>History</Link></Navbar.Link>
                        <Navbar.Link ><Link href="/" className='text-white'>Feedback</Link></Navbar.Link>
                        <Navbar.Link ><Link href="/" className='text-white'>Profile</Link></Navbar.Link>
                        <Navbar.Link ><Link href="/" className='text-white'>Settings</Link></Navbar.Link>
                        <Navbar.Link ><Link href="/" className='text-white'>Logout</Link></Navbar.Link>

                    </Navbar.Collapse>
                </div>
 */}

            </Navbar>


        </div>
    )
}
