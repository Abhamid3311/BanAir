import PageBanner from '@/components/UI/PAges/PageBanner';
import RootLayout from '@/components/layouts/RootLayout';
import { IFlightDeal } from '@/components/utils/Types';
import { baseUrl } from '@/components/utils/url';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { TbArrowsExchange } from 'react-icons/tb';
import { GetServerSidePropsContext } from 'next';

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

export default function PackagesDetails({ packageDetails }: { packageDetails: IFlightDeal }) {
    const [comment, setComment] = useState('');
    // const [postComment, { isLoading: isCommenting }] = useAddCommentMutation();
    // const { data: session } = useSession();

    console.log(packageDetails);
    const { _id, from, to, startDate, endDate, price, img, type, desc, ratings, status, reviews } = packageDetails;



    //Handle Comment Form
    const handleCommentForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(comment)

        /* if (!session.user.email) {
            toast.info("Please login For comment Here!");
            return
        }

        const data = {
            name: session.user.email,
            comment: comment
        }

        postComment({ id, data })
            .unwrap()
            .then((response) => {
                // console.log('Comment added successfully', response);
                toast.success("Comment Added Successfully!");

            })
            .catch((error) => {
                console.error('Error adding Comment', error);
                toast.error("Comment Added Failed!")
            });

        e.target.reset(); */
    };


    return (
        <>
            <PageBanner>
                <div className='text-center '>
                    <h1 className='text-5xl font-bold  '>Package Details</h1>
                    <p className='text-semibold   mt-2'>
                        <Link href={"/"}>Home</Link> / Package / <span className='text-secondary'>Package Details</span></p>
                </div>
            </PageBanner>

            <div className='bg-lightBg text-textClr py-10'>
                <div className='max-w-5xl mx-auto flex flex-col lg:flex-row px-5 lg:px-0 items-center  gap-3 bg-white shadow-md rounded-md '>

                    <div className='w-full lg:w-1/2 h-full lg:h-[420px]'>
                        <img src={img} alt={from} className='w-full h-full rounded-l-md' />
                    </div>

                    <div className='w-full lg:w-1/2 p-3'>
                        <div>
                            <h1 className='text-2xl font-bold text-primary  '>{from} <TbArrowsExchange className="text-3xl" /> {to}</h1>
                            <h3 className='font-bold'>Date: <span > {startDate} -- {endDate}</span></h3>
                        </div>
                        <div>
                            <p>Ratings: <span className='font-bold text-green-700'>{renderStarRating(ratings)}</span></p>
                            <p>Status: {status}</p>
                            <p>Ticket Type: {type}</p>
                            <p>Price : <span className='text-primary font-bold text-xl'>{price}$</span></p>
                        </div>
                        <p >Descriptions: </p><p className='mb-3'>{desc}</p>

                        <Link href={`/booking-now/${_id}`}  > <Button color='warning'>Book Now</Button></Link>
                    </div>


                </div>

                <div className='bg-white max-w-5xl mx-auto p-5 mt-3 shadow-md rounded-md'>

                    <div>
                        <form onSubmit={handleCommentForm}>
                            <div className="w-full" id="textarea">
                                <textarea
                                    placeholder="Leave a comment..."
                                    onChange={(e) => setComment(e.target.value)}
                                    required rows={2}
                                    className='w-full border border-gray-300 focus:ring-primary focus:border-primary rounded-md' />
                            </div>
                            <button type='submit' className='bg-primary text-white px-3 py-1 rounded-[5px]  font-semibold '> Comment</button>
                        </form>

                    </div>

                    <h1 className='text-xl font-bold mt-5'>Reviews:</h1>
                    {
                        reviews.map((rev, index) => <div key={index} className='mt-3 flex gap-2 items-center'>
                            <FaUserCircle className="text-3xl" />
                            <div>
                                <h3 className='font-bold'>{rev.user}</h3>
                                <p className='text-sm'>{rev.review}</p>
                            </div>
                        </div>)
                    }


                </div>
            </div>
        </>

    )
};


PackagesDetails.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
};


//SSR
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { params } = context;
    const res = await fetch(`${baseUrl}/deal/${params?.id}`);
    const data = await res.json();
    // console.log(data)

    return {
        props: {
            packageDetails: data,
        }
    }
};


