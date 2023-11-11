import Table from '@/components/UI/PAges/Table';
import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import { useDeleteBookingMutation, useGetBookingQuery } from '@/redux/api/api';
import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { BsEyeFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function Bookings() {
    const { data: bookings, isLoading } = useGetBookingQuery(undefined);
    const [deleteBooking, { isLoading: isDeleting }] = useDeleteBookingMutation();
    const router = useRouter()

    console.log(bookings)



    //Handle Book Delete
    const handleDeleteBtn = (id: string) => {
        const procced = window.confirm('You want to delete?');
        if (procced) {
            deleteBooking(id).unwrap()
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


    if (isLoading) { return <p>Loading...</p> };
    if (!isLoading && bookings?.length === 0) { return <p className='pt-20'>No bookings Avaiable</p> };

    //handleUserViewBtn
    const handleUserViewBtn = (id: string) => {
        router.push(`/Admin-dashboard/booking-managment/booking-details/${id}`)
    };




    const DEALS_COLUMNS = () => {
        return [
            {
                Header: "SL",
                id: "index",
                accessor: (_row: any, i: number) => i + 1,
            },
            {
                Header: "Name",
                accessor: "FirstName",
                sortType: 'basic',

            },
            {
                Header: "Nationality",
                accessor: "Nationality",
                sortType: 'basic',

            },
            {
                Header: "Cost",
                accessor: "totalCost",
                sortType: 'basic',

            },
            {
                Header: "Status",
                accessor: "status",
                sortType: 'basic',
                Cell: ({ row }: { row: any }) => {
                    const { status } = row.original;
                    return (<div>
                        {status === 1 ? <p className='text-secondary'>Pending</p> :
                            status === 2 ? <p className='text-green-500'>Confirmed</p> :
                                status === 3 ? <p className='text-red-500'>Canceled</p> :
                                    <p className='text-blue-500'>N/A</p>
                        }

                    </div>);
                },

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
            {bookings?.length && (
                <Table columns={DEALS_COLUMNS()} data={bookings} headline={"ALL BOOKING"} />
            )}
        </div>
    )
}


Bookings.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};