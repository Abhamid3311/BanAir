import Table from '@/components/UI/PAges/Table';
import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import { useGetUsersQuery } from '@/redux/api/api';
import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { BsEyeFill } from 'react-icons/bs';

export default function UserManagment() {
    const { data: users, isLoading } = useGetUsersQuery(undefined);
    // console.log(users);

    /*  //Handle Collection Delete
     const handleDeleteBtn = id => {
         const procced = window.confirm('You want to delete?');
         if (procced) {
             axios.delete(`${baseUrl}/collections/${id}`)
                 .then(response => {
                     // console.log(`Deleted post with ID ${id}`);
                     toast.success("Deleted successfully!");
 
                 })
                 .catch(error => {
                     console.error(error);
                     toast.error("Deleted Failed!");
                 });
         };
     };
 
 
     //View Collection
     const handleCollectionViewBtn = id => {
         navigate(`/dashboard/collections/view-collection/${id}`);
     };
     //Edit Collection
 
     const handleEditBtn = id => {
         navigate(`/dashboard/edit-collection/${id}`);
     };
 
     if (loading) { return <LoadingCard /> };
     if (!loading && collection?.length === 0) { return <p className='pt-20'>No Collection Avaiable</p> }; */



    const COLLECTIONS_COLUMNS = () => {
        return [
            {
                Header: "SL",
                id: "index",
                accessor: (_row, i) => i + 1,
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
                Cell: ({ row }) => {
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
                Cell: ({ row }) => {
                    const { _id } = row.original;
                    return (<div className='flex items-center justify-center gap-2 '>
                        <button >
                            <div className='w-8 h-8 rounded-md bg-green-700 text-white  grid items-center justify-center'>
                                <BsEyeFill className='text-lg   ' />
                            </div>
                        </button>


                        {/*  <button >
                            <div className='w-8 h-8 rounded-md bg-[#0068A3] text-white grid items-center justify-center'>
                                <RiEditBoxFill className='text-lg  ' />
                            </div>
                        </button> */}

                        <button >
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


UserManagment.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};