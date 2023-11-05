import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';
import SocialLogin from './SocialLogin';
import { useRouter } from 'next/router'
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
    const dispatch = useAppDispatch();
    const { user, isLoading } = useAppSelector(state => state.user);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        dispatch(loginUser({ email: data.email, password: data.password }));
        // toast.success("Logged in Succesfully")
    };


    //Check Role and Redirect Users
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user.email && !isLoading) {
                    console.log(user.email);
                    const response = await axios.get(`${baseUrl}/user/${user.email}`);
                    const userData = response.data;
                    console.log(userData)

                    // Check user role
                    if (userData.role === 'admin') {
                        router.push('/Admin-dashboard');
                    } else {
                        router.push('/dashboard');
                    }
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [user.email, isLoading, router]);




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
