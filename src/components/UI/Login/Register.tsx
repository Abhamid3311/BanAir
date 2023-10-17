import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';
import SocialLogin from './SocialLogin';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { auth } from '@/components/utils/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { baseUrl } from '@/components/utils/url';
import { useRouter } from 'next/router'


export default function Register() {
    const { register, handleSubmit, reset } = useForm();
    const router = useRouter();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    if (loading) {
        return <p>Loading...</p>;
    };

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const { name, email, phoneNumber, password, checkbox } = data;

        if (!checkbox) {
            toast.error("Mark on Checkbox !")
            return
        };
        const newUser = { name, email, phoneNumber };

        //User Register
        await createUserWithEmailAndPassword(email, password);
        if (error) {
            console.log(error.message);
            toast.error("Register Failed !")
        } else {

            //send to server
            const url = `${baseUrl}/users`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.success("User Registration Success!");
                    router.push("/dashboard")
                    // reset();
                })
        }
    };

    console.log(user)



    return (
        <div className='w-full lg:w-[500px] bg-white p-5 rounded-md shadow-md'>
            <h1 className='text-center text-2xl font-bold text-primary mb-2'>Sign Up</h1>
            <form className="flex  flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <div className="mb-1 block">
                        <Label
                            color="info"
                            htmlFor="Name"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        id="Name"
                        placeholder="Enter name"
                        required
                        type="text"
                        {...register("name", { required: true })}
                    />
                </div>

                <div>
                    <div className="mb-1 block">
                        <Label
                            color="info"
                            htmlFor="Phone"
                            value="Your Phone"
                        />
                    </div>
                    <TextInput
                        id="Phone"
                        placeholder="Enter Phone Number"
                        required
                        type="tel"
                        {...register("phoneNumber", { required: true })}
                    />
                </div>

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
                        {...register("email", { required: true })}
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
                        {...register("password", { required: true })}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox id="remember"  {...register("checkbox", { required: true })} />
                    <Label htmlFor="remember" >
                        <p className='text-xs'>
                            <Link href="/Terms&Conditions" className='hover:underline text-primary'>Terms and Conditions</Link> &
                            <Link href="/Privacy-Policy" className='hover:underline text-primary'> Privacy Policy</Link> </p>
                    </Label>
                </div>

                <Button type="submit" color='warning'>
                    Sign Up
                </Button>

            </form>

            <div className='text-lg  text-center my-5'>---- or ----</div>

            <SocialLogin />



            <p className='text-end text-sm mt-2'>Already have an account? <Link href={"/login"} className='hover:underline hover:text-secondary'>Login</Link></p>


        </div>
    )
}
