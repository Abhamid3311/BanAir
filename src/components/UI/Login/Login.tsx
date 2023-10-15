import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import SocialLogin from './SocialLogin';

export default function Login() {
    return (
        <div className='w-96 bg-white p-5 rounded-md shadow-md'>
            <h1 className='text-center text-2xl font-bold text-primary mb-2'>Login</h1>
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

                <Button type="submit" color='warning'>
                    Login
                </Button>
            </form>

            <div className='text-lg  text-center my-5'>---- or ----</div>

            <SocialLogin />

            <p className='text-end text-sm mt-2'>New in BDAir? create an accound <Link href={"/signUp"} className='hover:underline hover:text-secondary'>SignUp</Link></p>


        </div>
    )
}
