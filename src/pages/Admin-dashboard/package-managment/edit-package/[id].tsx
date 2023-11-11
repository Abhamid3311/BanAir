import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useGetSinglePackagesQuery, useUpdatePackageMutation } from '@/redux/features/packages/packagesApi';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function EditPackage() {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetSinglePackagesQuery(id);
    const [updatePackage, { isLoading }] = useUpdatePackageMutation();
    const [startDateType, setStartDateType] = useState('text');
    const [endDateType, setEndDateType] = useState('text');



    // console.log(data);

    const { register, handleSubmit, reset, setValue } = useForm({
        defaultValues: {
            from: data?.from || '',
            to: data?.to || '',
            startDate: data?.startDate || '',
            endDate: data?.endDate || '',
            type: data?.type || '',
            ratings: data?.ratings || '',
            status: data?.status || '',
            price: data?.price || '',
            img: data?.img || '',
            desc: data?.desc || '',
        },
    });

    useEffect(() => {
        if (data) {
            setValue('from', data.from || '');
            setValue('to', data.to || '');
            setValue('startDate', data.startDate || '');
            setValue('endDate', data.endDate || '');
            setValue('type', data.type || "");
            setValue('ratings', data.ratings || '');
            setValue('status', data.status || '');
            setValue('price', data.price || '');
            setValue('img', data.img || '');
            setValue('desc', data.desc || '');
        }
    }, [data, setValue]);


    //Handle Update Package Form
    const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
        try {
            const updatedData = {
                from: formData.from,
                to: formData.to,
                startDate: formData.startDate,
                endDate: formData.endDate,
                type: formData.type,
                ratings: formData.ratings,
                status: formData.status, // Make sure 'status' is included
                price: formData.price,
                img: formData.img,
                desc: formData.desc,
            };

            console.log(updatedData)

            const response = await updatePackage({ data: updatedData, id }).unwrap();
            console.log('Package Updated successfully', response);
            toast.success("Package Updated Successfully!");
            reset();
        } catch (error) {
            console.error('Error Updated Package', error);
            toast.error("Package Updated Failed!");
        }
    };


    return (
        <div className='bg-lightBg text-textClr p-4  min-h-screen w-full'>
            <h1 className='font-bold text-2xl text-center text-primary mb-5'>Edit Package</h1>

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
                                {...register("from", { required: true })}
                            />
                        </div>

                        <div className="w-full  ">
                            <div className="mb-1 block"><Label htmlFor="From" value="Arrival City*" /> </div>
                            <TextInput
                                id="From"
                                placeholder="Arrival City Name"
                                required
                                type="text"
                                {...register("to", { required: true })}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-3 w-full my-3">
                        <div className="w-full  ">
                            <div className="mb-1 block"><Label htmlFor="From" value="Departure Date*" /> </div>
                            <TextInput
                                id="From"
                                placeholder="Departure Date"
                                type={startDateType === 'date' ? 'date' : 'text'}
                                onClick={() => setStartDateType('date')}
                                {...register("startDate", { required: true })}
                            />
                        </div>

                        <div className="w-full  ">
                            <div className="mb-1 block"><Label htmlFor="endDate" value="Arrival Date*" /> </div>
                            <TextInput
                                id="endDate"
                                placeholder="Arrival Date"
                                type={endDateType === 'date' ? 'date' : 'text'}
                                onFocus={() => setEndDateType('date')}
                                {...register("endDate", { required: true })}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-3 w-full my-3">

                        <div className="w-full  " id="select">
                            <div className="mb-1 block"><Label htmlFor="Type" value="Type*" /> </div>
                            <Select id="Type"   {...register("type", { required: true })}>
                                <option selected disabled>Choose Flight Types</option>
                                <option value="Economy Class">Economy Class</option>
                                <option value="Premium Economy">Premium Economy</option>
                                <option value="Premium Economy">Business Class</option>
                                <option value="Premium Economy">First Class</option>
                            </Select>
                        </div>

                        <div className="w-full  " id="select">
                            <div className="mb-1 block"><Label htmlFor="Ratings" value="Ratings*" /> </div>
                            <Select id="Ratings"    {...register("ratings", { required: true })}>
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
                                {...register("price", { required: true })}
                            />
                        </div>

                        <div className="w-full  ">
                            <div className="mb-1 block"><Label htmlFor="img" value="Image*" /> </div>
                            <TextInput
                                id="img"
                                placeholder="Add Image Link"
                                required
                                type="text"
                                {...register("img", { required: true })}
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Descriptions*" />
                        </div>
                        <Textarea  {...register("desc", { required: true })} id="comment" placeholder="Write Descriptions..." required rows={4} />
                    </div>

                    <div className='flex items-center justify-center my-3'>
                        <Button disabled={isLoading} type='submit' color='warning'>
                            {isLoading ? "Updating.." : "Update"}
                        </Button>
                    </div>

                </form>
            </div>

        </div>
    )
};

EditPackage.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};
