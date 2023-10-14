import { Button, Navbar } from 'flowbite-react';
import Link from 'next/link';


export default function Header() {
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
                <Link href={"/signUp"}>
                    <Button color="warning" className="px-1 lg:px-2 font-bold ">
                        SignUp / Login
                    </Button></Link>
                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
                <Navbar.Link active className='text-white active:text-secondary'><Link href={"/"}>HOME</Link></Navbar.Link>
                <Navbar.Link className='text-white active:text-secondary'><Link href={"/booking"}>BOOKING</Link></Navbar.Link>
                <Navbar.Link className='text-white active:text-secondary'><Link href={"/where-we-fly"}>WHERE WE FLY</Link></Navbar.Link>
                <Navbar.Link className='text-white active:text-secondary' ><Link href={"/about-us"}>ABOUT US </Link></Navbar.Link>
                {/* <Navbar.Link className='text-white active:text-secondary' ><Link href={"/"}>LOYALITY </Link></Navbar.Link> */}
                <Navbar.Link className='text-white active:text-secondary'><Link href={"/help"}>HELP </Link></Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
