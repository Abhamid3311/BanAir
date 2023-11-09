import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import { useGetSinglePackagesQuery } from '@/redux/features/packages/packagesApi';
import { useRouter } from 'next/router';


//Add Star
const renderStarRating = (ratings: number | undefined) => {
    const stars = [];
    const ratingValue = ratings || 0;
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} className={i <= ratingValue ? 'text-secondary text-lg' : 'text-gray-300 text-lg'}>
                &#9733;
            </span>
        );
    }
    return stars;
};

export default function PackageDetails() {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetSinglePackagesQuery(id);
    console.log(data);

    return (
        <div className="bg-white p-4 ">
            <h1 className='font-bold text-2xl text-center text-primary'>Package Details</h1>
            <div className='flex flex-col lg:flex-row items-center gap-10 mt-10'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-primary font-bold text-xl'>Destination: {`${data?.from} --- ${data?.to}`}</h1>
                    <h1>Duration: {`${data?.startDate} --- ${data?.endDate}`}</h1>
                    <p>Package Price/Person: <span className='text-secondary font-bold'>{data?.price}$</span></p>
                    <p>Ratings: {renderStarRating(data?.ratings)}</p>
                    <p>Type: {data?.type}</p>
                    <p>Status: {data?.status}</p>

                    <p className='font-bold'>Dedcriptions:</p><p>{data?.desc}</p>
                </div>

                <div className='w-full lg:w-1/2'>
                    <img src={data?.img} alt={data?.from} srcSet="" className='rounded-md' />
                </div>
            </div>

        </div>
    )
};


PackageDetails.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};