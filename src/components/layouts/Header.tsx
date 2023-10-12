import { Button, Navbar } from 'flowbite-react';
import Link from 'next/link';


export default function Header() {
    return (
        <Navbar className='bg-textClr' >
            <Navbar.Brand href="https://flowbite-react.com">
                {/*   <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    src="/favicon.svg"
                /> */}
                <span className="self-center whitespace-nowrap text-2xl font-semibold text-secondary">
                    Bd Air
                </span>
            </Navbar.Brand>


            <div className="flex md:order-2">
                <Button color="warning" className="px-3 lg:px-6 font-bold ">
                    SignUp
                </Button>
                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
                <Navbar.Link active className='text-white active:text-secondary'><Link href={"/"}>Home </Link></Navbar.Link>
                <Navbar.Link className='text-white active:text-secondary' ><Link href={"/"}>About </Link></Navbar.Link>
                <Navbar.Link className='text-white active:text-secondary'><Link href={"/"}>Book </Link></Navbar.Link>
                <Navbar.Link className='text-white active:text-secondary' ><Link href={"/"}>Loyalty </Link></Navbar.Link>
                <Navbar.Link className='text-white active:text-secondary'><Link href={"/"}>Contacts </Link></Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
