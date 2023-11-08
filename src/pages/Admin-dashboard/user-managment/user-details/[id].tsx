import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import { useGetSingleUsersByIdQuery } from '@/redux/features/users/userApi'
import { useRouter } from 'next/router';

export default function UserDetails() {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetSingleUsersByIdQuery(id);
    console.log(data);


    return (
        <div className="bg-white p-4 ">
            <h1 className='font-bold text-lg'>User Details</h1>
            <div>
                <h1>Name: {data?.name}</h1>
                <p>
                    Role: 
                    {data?.role === "admin" ?
                        <span className='text-green-700 font-semibold'> Admin</span> :
                        <span className='text-red-700 font-semibold'> User</span>}
                </p>
                <p>Email: {data?.email}</p>
                <p>Phone Number: {data?.phoneNumber}</p>
            </div>

        </div>
    )
};


UserDetails.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};