import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import { useGetSingleReviewQuery } from '@/redux/api/api';
import { useRouter } from 'next/router';

//Add Star
const renderStarRating = (ratings: number | undefined) => {
    const stars = [];
    const ratingValue = ratings || 0;
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} className={i <= ratingValue ? 'text-secondary' : 'text-gray-300'}>
                &#9733;
            </span>
        );
    }
    return stars;
};

export default function TestimonialDetails() {
    const router = useRouter();
    const { id } = router.query;
    const { data } = useGetSingleReviewQuery(id);
    console.log(data);

    return (
        <div>
            <div className="bg-white p-4 flex items-center justify-center max-w-3xl mx-auto">
                <div>
                    <h1 className='font-bold text-2xl text-primary mb-4'>Testimonial Details</h1>
                    <div>
                        <h1>Name: {data?.name}</h1>
                        <p>Email: {data?.email}</p>
                        <p>Designation: {data?.desi}</p>
                        <p>Country: {data?.country}</p>
                        <p>Ratings: <span className='text-lg'>{renderStarRating(data?.ratings)} </span></p>
                        <p className='font-bold'>Comment:</p>
                        <p> &quot;{data?.comment}&quot;</p>

                    </div>
                </div>
            </div>
        </div>
    )
};

TestimonialDetails.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};
