import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGithub } from 'react-icons/ai';

export default function Register() {

    //onClick={() => signIn("google", { callbackUrl: "https://moon-tech-omega.vercel.app/pc-builder"})}
    //onClick={() => signIn("github", {callbackUrl: `https://moon-tech-omega.vercel.app/pc-builder`})}



    return (
        <div className='w-96 bg-white p-5 rounded-md shadow-md'>
            <h1 className='text-center text-2xl font-bold text-primary mb-2'>Sign Up</h1>
            <form className="flex  flex-col gap-4">
                <div>
                    <div className="mb-1 block">
                        <Label
                            color="info"
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        placeholder="name@gmail.com"
                        required
                        type="email"
                    />
                </div>

                <div>
                    <div className="mb-1 block">
                        <Label
                            htmlFor="password"
                            color="info"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password"
                        placeholder="*******"
                        required
                        type="password"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" >
                        <p className='text-xs'>
                            <Link href="/" className='hover:underline'>Terms and Conditions</Link> &
                            <Link href="/" className='hover:underline'> Privacy Policy</Link> </p>
                    </Label>
                </div>

                <Button type="submit" color='warning'>
                    Sign Up
                </Button>

            </form>

            <div className='text-lg  text-center my-5'>---- or ----</div>

            <div >
                <Button className='bg-[#4D82E5] mb-2 w-full'  >
                    <FcGoogle className="mr-2 h-7 w-7 bg-white p-1 rounded-full" />
                    <p className=' font-bold'> Sign in with Google </p>
                </Button>
                <Button color="dark" className='w-full'>
                    <AiOutlineGithub className="mr-2 h-7 w-7  " />
                    <p className=' font-bold'> Sign in with GitHub </p>
                </Button>
            </div>

            <p className='text-end text-sm mt-2'>Already have an account? <Link href={"/login"} className='hover:underline hover:text-secondary'>Login</Link></p>


        </div>
    )
}
