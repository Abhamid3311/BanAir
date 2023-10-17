import UserDashboardLayout from '@/components/layouts/user/UserDashboardLayout';
import { baseUrl } from '@/components/utils/url';
import axios from 'axios';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function Feedback() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const url = `${baseUrl}/testimonial`;
        axios.post(url, data)
            .then(function (response) {
                console.log(response);
                toast.success("Thank You For Your feedback");
                reset();
            })
            .catch(function (error) {
                console.log(error);
            });
    };



    return (
        <div className='bg-lightBg text-textClr p-5   min-h-screen w-full'>
            <h1 className='text-2xl font-bold text-primary mb-4 mx-5'>Feedback</h1>

            <div className='bg-white p-5 m-5 rounded-md shadow-md'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex items-center gap-3 flex-col lg:flex-row'>
                        <div className="w-full  ">
                            <div className="mb-2 block"><Label htmlFor="Name" value="Your Name*" /> </div>
                            <TextInput
                                id="Name"
                                placeholder="Enter Name"
                                required
                                type="text"
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="w-full  ">
                            <div className="mb-2 block"><Label htmlFor="Email" value="Your Email*" /> </div>
                            <TextInput
                                id="Email"
                                placeholder="Enter Email"
                                required
                                type="email"
                                {...register("email", { required: true })}
                            />
                        </div>
                    </div>

                    <div className='flex items-center gap-3 flex-col lg:flex-row my-3'>

                        <div className="w-full  ">
                            <div className="mb-2 block"><Label htmlFor="Designation" value="Your Designation*" /> </div>
                            <TextInput
                                id="Designation"
                                placeholder="Enter Designation"
                                required
                                type="text"
                                {...register("desi", { required: true })}
                            />
                        </div>

                        <div className="w-full  ">
                            <div className="mb-2 block"><Label htmlFor="Country" value="Your Country*" /> </div>
                            <TextInput
                                id="Country"
                                placeholder="Enter Country"
                                required
                                type="text"
                                {...register("country", { required: true })}
                            />
                        </div>
                    </div>

                    <div className="w-full my-3" id="select">
                        <div className="mb-2 block"><Label htmlFor="countries" value="Select Ratings*" /> </div>
                        <Select id="countries"  {...register("ratings", { required: true })} >
                            <option value={1} selected>1</option>
                            <option value={2}>2 </option>
                            <option value={3}>3 </option>
                            <option value={4}>4 </option>
                            <option value={5}>5 </option>
                        </Select>
                    </div>



                    <div className="w-full my-3" id="textarea" >
                        <div className="mb-2 block"><Label htmlFor="comment" value="Your Comments" /></div>
                        <Textarea
                            id="comment"
                            placeholder="Leave a comment..."
                            required
                            rows={4}
                            {...register("comment", { required: true })}
                        />
                    </div>

                    <div className='flex items-center justify-center gap-3'>
                        <Button color='warning' type='submit' className='px-4 py-0.5'>Submit</Button>
                        <Button color='failure' className='px-4 py-0.5' onClick={() => reset()}>Reset</Button>
                    </div>


                </form>
            </div>

        </div>
    )
}


Feedback.getLayout = function getLayout(page: React.ReactNode) {
    return <UserDashboardLayout>{page}</UserDashboardLayout>;
};