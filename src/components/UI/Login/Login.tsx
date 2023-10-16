import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import SocialLogin from './SocialLogin';
import { useRouter } from 'next/router'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/components/utils/firebase';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { baseUrl } from '@/components/utils/url';
import { toast } from 'react-toastify';

export default function Login() {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //erroe message
    if (error) {
        console.log(error)
    };
    /* if (loading) {
        return <p>Loading.....</p>
    };
 */



    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const { email, password } = data;

        signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential?.user;
                const email = user?.email;
                const token = user?.accessToken;

                window.localStorage.setItem("email", email!)
                window.localStorage.setItem("token", token);

                toast.success("SignIn Successfully");
                router.push("/dashboard")
            })
            .catch((error) => {
                console.log(error);
                toast.error("Login Failed!");
            });
    };



    return (
        <div className='w-96 bg-white p-5 rounded-md shadow-md'>
            <h1 className='text-center text-2xl font-bold text-primary mb-2'>Login</h1>
            <form className="flex  flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
