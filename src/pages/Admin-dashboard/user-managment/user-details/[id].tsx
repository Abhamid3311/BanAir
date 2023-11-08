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
                <h1>Email: {data?.email}</h1>
                <h1>Phone Number: {data?.phoneNumber}</h1>
            </div>

        </div>
    )
};


UserDetails.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};