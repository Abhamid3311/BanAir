import Table from '@/components/UI/PAges/Table';
import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import { useDeleteUserMutation, useGetUsersQuery } from '@/redux/features/users/userApi';
import { useRouter } from 'next/router';
import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { BsEyeFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

export default function UserManagment() {
    const { data: users, isLoading } = useGetUsersQuery(undefined);
    const [deleteUsers, { isLoading: isDeleting }] = useDeleteUserMutation();
    const router = useRouter()
    // console.log(users);


    const handleDeleteBtn = (_id: number) => {
        const procced = window.confirm('You want to delete?');
        if (procced) {
            deleteUsers(_id).unwrap()
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
        // console.log(id)
        router.push(`/Admin-dashboard/user-details/${id}`)
    };

    //Edit Collection

    /*  const handleEditBtn = id => {
         navigate(`/dashboard/edit-collection/${id}`);
     }; */

    if (isLoading) { return <p>Loading...</p> };
    if (!isLoading && users?.length === 0) { return <p className='pt-20'>No user Avaiable</p> };



    const COLLECTIONS_COLUMNS = () => {
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
                Header: "Number",
                accessor: "phoneNumber",
                sortType: 'basic',

            },
            {
                Header: "Role",
                accessor: "role",
                sortType: 'basic',
                Cell: ({ row }: { row: any }) => {
                    const { role } = row.original;
                    // console.log(avaiability)
                    return (<div>
                        {role === "admin" ?
                            <p className='text-green-700 font-semibold'>Admin</p> :
                            <p className='text-red-700 font-semibold'>User</p>}

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


                        {/*  <button >
                            <div className='w-8 h-8 rounded-md bg-[#0068A3] text-white grid items-center justify-center'>
                                <RiEditBoxFill className='text-lg  ' />
                            </div>
                        </button> */}

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
            {users?.length && (
                <Table columns={COLLECTIONS_COLUMNS()} data={users} headline={"ALL USERS"} />
            )}
        </div>

    )
}


UserManagment.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};