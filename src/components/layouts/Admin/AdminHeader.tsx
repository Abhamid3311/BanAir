import { Navbar } from 'flowbite-react'
import React from 'react'

export default function AdminHeader() {
    return (
        <Navbar className='bg-textClr'>
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-2xl font-semibold text-secondary ">BanAir</span>
            </Navbar.Brand>

            <div className="flex">
                <div className='text-white text-xl font-bold'>Admin</div>
                {/* <Navbar.Toggle /> */}
            </div>



        </Navbar>
    )
}
