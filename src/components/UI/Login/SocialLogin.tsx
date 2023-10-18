import { Button } from 'flowbite-react'
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGithub } from 'react-icons/ai';
import { signIn } from 'next-auth/react';



export default function SocialLogin() {
    return (
        <div >
            <Button className='bg-[#4D82E5] mb-2 w-full' onClick={() => signIn("google", {
                callbackUrl: `https://banair.vercel.app/dashboard`
            })}>
                <FcGoogle className="mr-2 h-7 w-7 bg-white p-1 rounded-full" />
                <p className=' font-bold'> Sign in with Google </p>
            </Button>


            <Button color="dark" className='w-full' onClick={() => signIn("github", {
                callbackUrl: `https://banair.vercel.app/dashboard`
            })}>
                <AiOutlineGithub className="mr-2 h-7 w-7  " />
                <p className=' font-bold'> Sign in with GitHub </p>
            </Button>
        </div>
    )
}
