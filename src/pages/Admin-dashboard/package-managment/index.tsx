import Table from '@/components/UI/PAges/Table';
import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import { useDeleteFlightsMutation, useGetFlightsQuery } from '@/redux/features/packages/packagesApi';
import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { BsEyeFill } from 'react-icons/bs';
import { RiEditBoxFill } from 'react-icons/ri';
import { toast } from 'react-toastify';






export default function DealsManagment() {
    const { data: deals, isLoading } = useGetFlightsQuery(undefined);
    const [deleteDeals, { isLoading: isDeleting }] = useDeleteFlightsMutation();



    //Handle Book Delete
    const handleDeleteBtn = (_id: string) => {
        const procced = window.confirm('You want to delete?');
        if (procced) {
            deleteDeals(_id).unwrap()
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
    if (!isLoading && deals?.length === 0) { return <p className='pt-20'>No Packages Avaiable</p> };


    const DEALS_COLUMNS = () => {
        return [
            {
                Header: "SL",
                id: "index",
                accessor: (_row: any, i: number) => i + 1,
            },
            {
                Header: "From",
                accessor: "from",
                sortType: 'basic',

            },
            {
                Header: "To",
                accessor: "to",
                sortType: 'basic',

            },
            {
                Header: "Price",
                accessor: "price",
                sortType: 'basic',

            },
            {
                Header: "Status",
                accessor: "status",
                sortType: 'basic',
                Cell: ({ row }: { row: any }) => {
                    const { status } = row.original;
                    return (<div>
                        {status === "Available" ?
                            <p className='text-green-700 font-semibold'>Available</p> :
                            <p className='text-red-700 font-semibold'>Not Available</p>}

                    </div>);
                },

            },
            {
                Header: 'Action',
                accessor: 'action',
                Cell: ({ row }: { row: any }) => {
                    const { _id } = row.original;
                    return (<div className='flex items-center justify-center gap-2 '>
                        <button >
                            <div className='w-8 h-8 rounded-md bg-green-700 text-white  grid items-center justify-center'>
                                <BsEyeFill className='text-lg   ' />
                            </div>
                        </button>


                        <button >
                            <div className='w-8 h-8 rounded-md bg-[#0068A3] text-white grid items-center justify-center'>
                                <RiEditBoxFill className='text-lg  ' />
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
        <>

            <div className='bg-lightBg text-textClr   min-h-screen w-full'>
                {deals?.length && (
                    <Table columns={DEALS_COLUMNS()} data={deals} headline={"ALL DEALS"} />
                )}
            </div>

        </>

    )
}


DealsManagment.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};