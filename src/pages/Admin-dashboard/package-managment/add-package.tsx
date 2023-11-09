import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import { useAddPackageMutation } from '@/redux/features/packages/packagesApi';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function AddPackage() {
    const { register, handleSubmit, reset } = useForm();
    const [postPackage, { isLoading, isError }] = useAddPackageMutation();


    //Handle ADD Package Form
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        postPackage(data).unwrap()
            .then((response) => {
                console.log('Package added successfully', response);
                toast.success("Package Added Successfully!");
                reset();
            })
            .catch((error) => {
                console.error('Error adding Package', error);
                toast.error("Package Added Failed!")
            });
    };



    return (
        <div className='bg-lightBg text-textClr p-4  min-h-screen w-full'>
            <h1 className='font-bold text-2xl text-center text-primary mb-5'>Add Package</h1>

            <div>
                <form className='bg-white px-7 py-4 rounded-md' onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col lg:flex-row items-center gap-3 w-full my-3">
                        <div className="w-full  ">
                            <div className="mb-1 block"><Label htmlFor="From" value="Departure City*" /> </div>
                            <TextInput
                                id="From"
                                placeholder="Departure City Name"
                                required
                                type="text"
                                {...register("from")}
                            />
                        </div>

                        <div className="w-full  ">
                            <div className="mb-1 block"><Label htmlFor="From" value="Arrival City*" /> </div>
                            <TextInput
                                id="From"
                                placeholder="Arrival City Name"
                                required
                                type="text"
                                {...register("to")}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-3 w-full my-3">
                        <div className="w-full  ">
                            <div className="mb-1 block"><Label htmlFor="From" value="Departure Date*" /> </div>
                            <TextInput
                                id="From"
                                placeholder="Departure Date"
                                required
                                type="date"
                                {...register("startDate")}
                            />
                        </div>

                        <div className="w-full  ">
                            <div className="mb-1 block"><Label htmlFor="endDate" value="Arrival Date*" /> </div>
                            <TextInput
                                id="endDate"
                                placeholder="Arrival Date"
                                required
                                type="date"
                                {...register("endDate")}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-3 w-full my-3">

                        <div className="w-full  " id="select">
                            <div className="mb-1 block"><Label htmlFor="Type" value="Type*" /> </div>
                            <Select id="Type"  {...register("type", { required: true })}>
                                <option selected disabled>Choose Flight Types</option>
                                <option value="Economy Class">Economy Class</option>
                                <option value="Premium Economy">Premium Economy</option>
                                <option value="Premium Economy">Business Class</option>
                                <option value="Premium Economy">First Class</option>
                            </Select>
                        </div>

                        <div className="w-full  " id="select">
                            <div className="mb-1 block"><Label htmlFor="Ratings" value="Ratings*" /> </div>
                            <Select id="Ratings"  {...register("ratings", { required: true })}>
                                <option selected disabled>Select Ratings</option>
                                <option >1 </option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Select>
                        </div>

                        <div className="w-full  " id="select">
                            <div className="mb-1 block"><Label htmlFor="Status" value="Status*" /> </div>
                            <Select id="Status"  {...register("status", { required: true })}>
                                <option selected disabled>Choose Status </option>
                                <option value={"Available"} >Available</option>
                                <option value={"Not Available"} >Not Available</option>
                            </Select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-3 w-full my-3">
                        <div className="w-full  ">
                            <div className="mb-1 block"><Label htmlFor="price" value=" Price*" /> </div>
                            <TextInput
                                id="price"
                                placeholder="Price/person"
                                required
                                type="number"
                                {...register("price")}
                            />
                        </div>

                        <div className="w-full  ">
                            <div className="mb-1 block"><Label htmlFor="img" value="Image*" /> </div>
                            <TextInput
                                id="img"
                                placeholder="Add Image Link"
                                required
                                type="text"
                                {...register("img")}
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Descriptions*" />
                        </div>
                        <Textarea {...register("desc", { required: true })} id="comment" placeholder="Write Descriptions..." required rows={4} />
                    </div>

                    <div className='flex items-center justify-center my-3'>
                        <Button disabled={isLoading} type='submit' color='warning'>
                            {isLoading ? "Adding.." : "Add Package"}
                        </Button>
                    </div>

                </form>
            </div>

        </div>
    )
};


AddPackage.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};