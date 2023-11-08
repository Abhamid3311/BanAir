import Table from '@/components/UI/PAges/Table';
import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import { useDeleteReviewMutation, useGetReviewQuery } from '@/redux/api/api';

import { useRouter } from 'next/router';
import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { BsEyeFill } from 'react-icons/bs';
import { toast } from 'react-toastify';



export default function Testimonials() {
    const { data: reviews, isLoading } = useGetReviewQuery(undefined);
    const [deleteReview, { isLoading: isDeleting }] = useDeleteReviewMutation();
    const router = useRouter()
    console.log(reviews);


    const handleDeleteBtn = (_id: number) => {
        const procced = window.confirm('You want to delete?');
        if (procced) {
            deleteReview(_id).unwrap()
                .then((response) => {
                    console.log(response);
                    toast.success("Deleted Successfully!");
                })
                .catch((error) => {
                    console.error(error);
                    toast.error("Delete Failed!")
                });
        }

    };

    //handleUserViewBtn
    const handleUserViewBtn = (id: string) => {
        router.push(`/Admin-dashboard/testimonial-managment/testimonial-details/${id}`)
    };



    if (isLoading) { return <p>Loading...</p> };
    if (!isLoading && reviews?.length === 0) { return <p className='pt-20'>No Reviews Avaiable</p> };



    const REVIEWS_COLUMNS = () => {
        return [
            {
                Header: "SL",
                id: "index",
                accessor: (_row: any, i: number) => i + 1,
            },
            {
                Header: "Name",
                accessor: "name",
                sortType: 'basic',

            },
            {
                Header: "Email",
                accessor: "email",
                sortType: 'basic',

            },
            {
                Header: "Ratings",
                accessor: "ratings",
                sortType: 'basic',

            },

            {
                Header: 'Action',
                accessor: 'action',
                Cell: ({ row }: { row: any }) => {
                    const { _id } = row.original;
                    return (<div className='flex items-center justify-center gap-2 '>
                        <button onClick={() => handleUserViewBtn(_id)}>
                            <div className='w-8 h-8 rounded-md bg-green-700 text-white  grid items-center justify-center'>
                                <BsEyeFill className='text-lg   ' />
                            </div>
                        </button>

                        <button onClick={() => handleDeleteBtn(_id)} disabled={isDeleting}>
                            <div className='w-8 h-8 rounded-md bg-[#FF0000] text-white grid items-center justify-center'>
                                <AiFillDelete className='text-lg ' />
                            </div>
                        </button>
                    </div>);
                },
            },


        ];
    };


    return (
        <div className='bg-lightBg text-textClr   min-h-screen w-full'>
            {reviews?.length && (
                <Table columns={REVIEWS_COLUMNS()} data={reviews} headline={"ALL REVIEWS"} />
            )}
        </div>

    )
}


Testimonials.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};
