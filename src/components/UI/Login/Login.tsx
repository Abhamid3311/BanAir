import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import SocialLogin from './SocialLogin';
import { useRouter } from 'next/router'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/components/utils/firebase';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { baseUrl } from '@/components/utils/url';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loginUser } from '@/redux/features/users/userSlice';
import { useEffect } from 'react';

export default function Login() {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    // const [user] = useAuthState(auth);

    const dispatch = useAppDispatch();
    const { user, isLoading } = useAppSelector(state => state.user);
    console.log(user)





    /*    const onSubmit = async (data) => {
           const { email, password } = data;
   
   
   
   
             try {
                 // Sign in and get user credentials
                 const userCredential = await signInWithEmailAndPassword(email, password);
                 const user = userCredential?.user;
                 const token = user?.accessToken;
     
                 window.localStorage.setItem("email", user?.email || '');
                 window.localStorage.setItem("token", token || '');
     
                 // Get user role
                 const response = await axios.get(`${baseUrl}/users/${email}`);
                 const userRole = response.data.role;
     
                 console.log(userRole);
                 toast.success("SignIn Successfully");
     
                 if (userRole === "admin") {
                     router.push("/Admin-dashboard");
                 } else if (userRole === "user") {
                     router.push("/dashboard");
                 }
     
     
                 // router.push("/dashboard");
     
             } catch (error) {
                 console.error('Login failed:', error);
                 toast.error("Login Failed!");
             }
       }; */


    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        dispatch(loginUser({ email: data.email, password: data.password }));
        toast.success("Logged in Succesfully")
    };

    useEffect(() => {
        if (user.email && !isLoading) {
            console.log(user?.email)
            router.push("/dashboard")
        }
    }, [user.email, isLoading, router])




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
