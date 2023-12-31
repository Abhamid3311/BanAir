import AdminLayout from '@/components/layouts/Admin/AdminLayout';
import { useGetSingleBookingQuery, useUpdateBookingStatusMutation } from '@/redux/api/api';
import { Button } from 'flowbite-react';
import moment from 'moment';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function BookingDetails() {
    const router = useRouter();
    const { id } = router.query;
    const { data, isLoading } = useGetSingleBookingQuery(id);
    const [updateStatus, { isLoading: isUpdating }] = useUpdateBookingStatusMutation();
    console.log(data);


    if (isLoading) {
        return <p>Loading...</p>
    };

    //handle Accept Btn To change Status
    const handleAcceptBtn = (id: number) => {
        const newData = { ...data, status: 2 }
        updateStatus({ newData, id }).unwrap()
            .then((response) => {
                console.log('Booking Accept successfully', response);
                toast.success("Booking Accepted!");
            })
            .catch((error) => {
                console.error('Error Booking Accept', error);
                toast.error("Booking Accept Failed!")
            });
    };

    //handle Declined Btn To change Status
    const handleDeclinedBtn = (id: number) => {
        const newData = { ...data, status: 3 }
        updateStatus({ newData, id }).unwrap()
            .then((response) => {
                console.log('Booking Accept successfully', response);
                toast.success("Booking Accepted!");
            })
            .catch((error) => {
                console.error('Error Booking Accept', error);
                toast.error("Booking Accept Failed!")
            });
    };


    return (
        <div>
            <div className="bg-white p-4 ">
                <div className=''>
                    <h1 className='font-bold text-2xl text-primary mb-4 text-center'>Booking Details</h1>


                    <div className='mt-10'>
                        <div >
                            <h1 className='text-lg font-bold mb-2'>User Information</h1>
                            <div className='flex items-start gap-5'>
                                <div>
                                    <p>Name: </p>
                                    <p>Email: </p>
                                    <p>Phone: </p>
                                    <p>Gender: </p>
                                    <p>Date Of Birth: </p>
                                    <p>Nationality: </p>
                                    <p>Post Code: </p>
                                    <p>Address: </p>
                                </div>

                                <div>
                                    <p> {`${data?.title} ${data?.FirstName} ${data?.LastName}`}</p>
                                    <p>{data?.email}</p>
                                    <p>{data?.phone}</p>
                                    <p>{data?.Gender}</p>
                                    <p>{data?.birthDate}</p>
                                    <p>{data?.Nationality}</p>
                                    <p>{data?.PostCode}</p>
                                    <p>{data?.address}</p>
                                </div>
                            </div>
                        </div>


                        <div>
                            <h1 className='text-lg font-bold mb-2 mt-4'>Purchase Information</h1>
                            <div className='flex items-start gap-5'>
                                <div>
                                    <p>Total Person: </p>
                                    <p>Total Price: </p>
                                    <p>Status: </p>

                                    <p>Destination: </p>
                                    <p>Date: </p>

                                    <p>Booking type: </p>
                                    <p>Price/person: </p>
                                    <p>Flight status: </p>
                                    <p>Apply Time: </p>
                                    <p>Wheel Chair: </p>
                                    <p>Meal Type: </p>
                                </div>

                                <div>
                                    <p> {data?.total_person || 1}</p>
                                    <p className='text-primary font-bold'>{data?.totalCost}</p>

                                    {
                                        data?.status == 1 ? <p className='text-secondary'>Pending</p>
                                            : data?.status == 2 ? <p className='text-green-500'>Confirmed</p>
                                                : data?.status == 3 ? <p className='text-red-500'>Canceled</p>
                                                    : <p className='text-blue-500'>N/A</p>
                                    }


                                    <p>{`${data?.deals?.from} -- ${data?.deals?.to}`}</p>
                                    <p>{`${data?.deals?.startDate} -- ${data?.deals?.endDate}`}</p>

                                    <p>{data?.deals?.type}</p>
                                    <p>{data?.deals?.price}</p>
                                    <p>{data?.deals?.status}</p>

                                    <p>{moment(data?.createdAt).format("DD MMM, YYYY hh:mm")}</p>
                                    <p>{data?.wheelChair || "No"}</p>
                                    <p>{data?.MealType || "No Issue"}</p>



                                </div>
                            </div>

                        </div>


                        <div className='flex items-center gap-2 my-4'>
                            <Button color='success' onClick={() => handleAcceptBtn(data?._id)}>Accept</Button>
                            <Button color='failure' onClick={() => handleDeclinedBtn(data?._id)}>Declined</Button>
                        </div>

                    </div>











                </div>
            </div>
        </div>
    )
}


BookingDetails.getLayout = function getLayout(page: React.ReactNode) {
    return <AdminLayout>{page}</AdminLayout>;
};