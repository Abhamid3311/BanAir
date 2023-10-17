import PageBanner from "@/components/UI/PAges/PageBanner";
import RootLayout from "@/components/layouts/RootLayout";
import { IFlightDeal } from "@/components/utils/Types";
import { baseUrl } from "@/components/utils/url";
import { Button, Label, Select, TextInput } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSession } from "next-auth/react"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/components/utils/firebase";
import axios from "axios";
import { toast } from 'react-toastify';

export default function PurchasePage({ purchaseDeals }: { purchaseDeals: IFlightDeal }) {


    const [totalCost, setTotalCost] = useState(0);
    const [totalPerson, setTotalPerson] = useState(1);
    // console.log(totalPerson, totalCost);






    return (
        <>
            <PageBanner>
                <div className='text-center '>
                    <h1 className='text-5xl font-bold  '>Booking Details</h1>
                    <p className='text-semibold   mt-2'>
                        <Link href={"/"}>Home</Link> / <span className='text-secondary'>Booking Details</span></p>
                </div>
            </PageBanner>

            <div className='bg-lightBg text-textClr py-10'>
                <div className="max-w-7xl mx-auto px-3 lg:px-0">

                    <div className="bg-white py-5 flex flex-col lg:flex-row items-center justify-evenly shadow-md rounded-md">
                        <h3 className="text-5xl font-bold text-primary mb-2">BanAir</h3>

                        <div className="max-w-4xl">
                            <h1 className="text-lg lg:text-2xl font-bold text-primary text-center mb-3">Customer Details: Please fill in with valid information.</h1>

                            <ol className="flex items-center justify-center w-full p-3 py-2 space-x-5 text-sm font-medium text-center text-gray-500 bg-white  rounded-lg  sm:p-2 sm:space-x-4">

                                <li className="flex items-center text-secondary w-full">
                                    <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-secondary rounded-full shrink-0 ">1</span> <span className="text-xs lg:text-base">Passengers</span>


                                    <svg className="w-3 h-3 ml-2 sm:ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                                    </svg>
                                </li>


                                <li className="flex items-center text-secondary w-full">
                                    <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-secondary rounded-full shrink-0 ">2</span><span className="text-xs lg:text-base"> Payment</span>

                                    <svg className="w-3 h-3 ml-2 sm:ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                                    </svg>
                                </li>


                                <li className="flex items-center w-full">
                                    <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 ">3 </span> <span className="text-xs lg:text-base">Confirmation</span>
                                </li>
                            </ol>
                        </div>

                    </div>


                    <div className="flex flex-col lg:flex-row items-start gap-2 ">
                        <div className="w-full lg:w-3/4">
                            <BookingInfo setTotalPerson={setTotalPerson} totalCost={totalCost} purchaseDeals={purchaseDeals} />
                        </div>
                        <div className="w-full lg:w-1/4">
                            <PaymentInfo purchaseDeals={purchaseDeals} totalPerson={totalPerson} setTotalCost={setTotalCost} />
                        </div>
                    </div>



                </div>
            </div>

        </>
    )
};

PurchasePage.getLayout = function getLayout(page: React.ReactNode) {
    return <RootLayout>{page}</RootLayout>;
};




//SSR
export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`${baseUrl}/deal/${params.id}`);
    const data = await res.json();
    // console.log(data)

    return {
        props: {
            purchaseDeals: data,
        }
    }
};


const BookingInfo = ({ setTotalPerson, totalCost, purchaseDeals }) => {
    const { data: session } = useSession();
    const [user] = useAuthState(auth);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        data.totalCost = totalCost;
        data.deals = purchaseDeals;
        data.userEmail = session?.user?.email || user?.email;
        data.createdAt = new Date();
        data.status = 1

        // console.log(data)

        const url = `${baseUrl}/bookings`;
        axios.post(url, data)
            .then(function (response) {
                console.log(response);
                toast.success("Your Package Booking Successfully. We will notify Soon!");
                reset();
            })
            .catch(function (error) {
                console.log(error);
                toast.error("Your Package Booking Failed!")
            });


    };


    return <>
        <div className="bg-white  rounded-md shadow-md mt-5">
            <div className="w-full bg-primary px-5 py-3 rounded-t-md">
                <h1 className="text-white text-xl font-bold">Your Information</h1>
            </div>

            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col lg:flex-row items-center gap-3 w-full">

                    <div className="w-full lg:w-1/5 " id="select">
                        <div className="mb-2 block"><Label htmlFor="Title" value="Title" /> </div>
                        <Select id="Title" {...register("title")}>
                            <option selected disabled>Choose Title </option>
                            <option value={"Mr."}>Mr. </option>
                            <option value={"Mrs."}>Mrs. </option>
                            <option value={"Miss."}>Miss. </option>
                            <option value={"Ms."}>Ms. </option>
                            <option value={" "}>Undisclosed </option>
                        </Select>
                    </div>


                    <div className="w-full lg:w-2/5 ">
                        <div className="mb-2 block"><Label htmlFor="name" value="First Name*" /> </div>
                        <TextInput
                            id="name"
                            placeholder="Enter First Name"
                            required
                            type="text"
                            {...register("FirstName", { required: true })}
                        />
                    </div>

                    <div className="w-full lg:w-2/5 ">
                        <div className="mb-2 block"><Label htmlFor="LastName" value="Last Name*" /> </div>
                        <TextInput
                            id="LastName"
                            placeholder="Enter Last Name"
                            required
                            type="text"
                            {...register("LastName", { required: true })}
                        />
                    </div>
                </div>



                <div className="flex flex-col lg:flex-row items-center gap-3 w-full my-3">
                    <div className="w-full  " id="select">
                        <div className="mb-2 block"><Label htmlFor="Gender" value="Gender*" /> </div>
                        <Select id="Gender"  {...register("Gender", { required: true })}>
                            <option selected disabled>Choose Gender </option>
                            <option value={"Male"} >Male </option>
                            <option value={"Femal"} >Femal</option>
                        </Select>
                    </div>


                    <div className="w-full  ">
                        <div className="mb-2 block"><Label htmlFor="Nationality" value="Nationality*" /> </div>
                        <TextInput
                            id="Nationality"
                            placeholder="Enter Country Name"
                            required
                            type="text"
                            {...register("Nationality", { required: true })}
                        />
                    </div>


                </div>


                <div className="flex flex-col lg:flex-row items-center gap-3 w-full my-3">
                    <div className="w-full  ">
                        <div className="mb-2 block"><Label htmlFor="name" value="Post Code" /> </div>
                        <TextInput
                            id="name"
                            placeholder="Enter Post Code"
                            required
                            type="number"
                            {...register("PostCode")}
                        />
                    </div>


                    <div className="w-full  ">
                        <div className="mb-2 block"><Label htmlFor="birthDate" value="Date Of Birth*" /> </div>
                        <TextInput
                            id="birthDate"
                            required
                            type="date"
                            {...register("birthDate", { required: true })}
                        />
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row items-center gap-3 w-full my-3">
                    <div className="w-full ">
                        <div className="mb-2 block"><Label htmlFor="Nationality" value="Email*" /> </div>
                        <TextInput
                            id="Nationality"
                            placeholder="Enter Email"
                            required
                            type="email"
                            {...register("email", { required: true })}
                        />
                    </div>

                    <div className="w-full  ">
                        <div className="mb-2 block"><Label htmlFor="Phone" value="Phone Number*" /> </div>
                        <TextInput
                            id="Phone"
                            placeholder="Enter Phone Number"
                            required
                            type="tel"
                            {...register("phone", { required: true })}
                        />
                    </div>
                </div>

                <div className="w-full  my-3" id="select">
                    <div className="mb-2 block"><Label htmlFor="Person" value="Select Person*" /> </div>
                    <Select
                        id="Person"
                        onChange={(e) => setTotalPerson(e.target.value)} required
                    >
                        <option value={1} selected>1</option>
                        <option value={2}>2 </option>
                        <option value={3}>3 </option>
                        <option value={4}>4 </option>
                        <option value={5}>5 </option>
                        <option value={6}>6 </option>
                        <option value={7}>7 </option>
                    </Select>
                </div>



                <div className="w-full  " id="select">
                    <div className="mb-2 block"><Label htmlFor="Meal" value="Select Meal Type" /> </div>
                    <Select id="Meal" {...register("MealType")} >
                        <option selected disabled value={" "}>Choose Meal type (Optional) </option>
                        <option >Vegitarian </option>
                        <option >Non Vegitarian  </option>
                        <option >Suger free </option>
                    </Select>
                </div>

                <div className="w-full  my-3" id="select">
                    <div className="mb-2 block"><Label htmlFor="Wheel" value="Select Wheel Chair" /> </div>
                    <Select id="Wheel" {...register("wheelChair")}>
                        <option selected disabled value={" "}>Request Wheel Chair (Optional) </option>
                        <option >yes </option>
                        <option >No </option>
                    </Select>
                </div>

                <div className="flex items-center justify-center ">
                    <Button type="submit" color="warning" className="px-5 py-0.5">Submit</Button>
                </div>


            </form>

        </div>
    </>
};


const PaymentInfo = ({ purchaseDeals, totalPerson, setTotalCost }: { purchaseDeals: IFlightDeal, totalPerson: number }) => {
    const { _id, from, to, startDate, endDate, price, img, type, desc, ratings, status, reviews } = purchaseDeals;

    const mainPrice = parseFloat(price) * totalPerson;  // Assuming price is a string or number representing the main price
    const tax = Math.ceil(mainPrice * 0.05);
    const totalPrice = mainPrice + tax;
    const totalPayable = totalPrice - 10;
    setTotalCost(totalPayable)


    return <>
        <div className="bg-white  rounded-md shadow-md mt-5">
            <div className="w-full bg-primary px-5 py-3 rounded-t-md">
                <h2 className="text-white text-xl font-bold">Booking Info</h2>
            </div>

            <div className="py-2 px-2">

                <div >
                    <h2 className="text-2xl font-bold text-primary text-center"> {from} to {to}</h2>
                    <h2 className="font-semibold  text-center"> {startDate} - {endDate}</h2>
                    <hr className="my-2" />
                </div>

                <div className="mt-5 mb-10">
                    <h2 className="font-bold text-primary  mb-2">Select Discount Option</h2>
                    <hr />
                    <div className=" px-2 py-3 ">
                        <input type="text" placeholder="Enter Code" className=" border-primary rounded-md bg-lightBg" />
                    </div>
                </div>

                <div className="mt-3">
                    <h2 className="font-bold text-primary  mb-2">Your Preferred Bank</h2>
                    <hr />
                    <div className="grid grid-cols-2 px-2 gap-3 my-2">

                        <Link href={"#"} className="bg-lightBg hover:bg-gray-200 duration-500 px-3 py-3 rounded-md shadow-sm hover:shadow-lg flex items-center justify-center">
                            <img src="/assetes/paypal.png" alt="" srcSet="" />
                        </Link >

                        <Link href={"#"} className="bg-lightBg hover:bg-gray-200 duration-500 px-3 py-3 rounded-md shadow-sm hover:shadow-lg flex items-center justify-center">
                            <img src="/assetes/bank_logo02.png" alt="" srcSet="" />
                        </Link>

                        <Link href={"#"} className="bg-lightBg hover:bg-gray-200 duration-500 px-3 py-3 rounded-md shadow-sm hover:shadow-lg flex items-center justify-center">
                            <img src="/assetes/bank_logo03.png" alt="" srcSet="" />
                        </Link>

                        <Link href={"#"} className="bg-lightBg hover:bg-gray-200 duration-500 px-3 py-3 rounded-md shadow-sm hover:shadow-lg flex items-center justify-center">
                            <img src="/assetes/bank_logo04.png" alt="" srcSet="" />
                        </Link>

                        <Link href={"#"} className="bg-lightBg hover:bg-gray-200 duration-500 px-3 py-3 rounded-md shadow-sm hover:shadow-lg flex items-center justify-center">
                            <img src="/assetes/bank_logo05.png" alt="" srcSet="" />
                        </Link>

                        <Link href={"#"} className="bg-lightBg hover:bg-gray-200 duration-500 px-3 py-3 rounded-md shadow-sm hover:shadow-lg flex items-center justify-center">
                            <img src="/assetes/bank_logo06.png" alt="" srcSet="" />
                        </Link>
                    </div>
                    <hr />

                </div>

                <div className="mt-3">
                    <h2 className="font-bold text-primary  mb-2">Your price summary</h2>
                    <hr />

                    <div className="">
                        <div>
                            <div className="flex items-center justify-between bg-gray-200 text-primary font-bold px-3 py-2 rounded-md">
                                <h3>Details</h3>
                                <h3>Amount</h3>
                            </div>

                            <div className="px-3 text-lg text-primary">
                                <div className="flex items-center justify-between">
                                    <p>Person  x {totalPerson}</p>
                                    <p>${price * totalPerson}</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p>Tax-(5%)</p>
                                    <p>${tax.toFixed(2)}</p>
                                </div>
                                <hr />

                                <div className="flex items-center justify-between">
                                    <p>Total Airfare:</p>
                                    <p>${totalPrice}</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p>Discount</p>
                                    <p>- $10</p>
                                </div>
                                <hr />

                                <div className="flex items-center justify-between">
                                    <p>Total Payable</p>
                                    <p>${totalPayable}.00</p>

                                </div>
                            </div>

                            <div className="flex items-center justify-center py-3">
                                <Link href={"#"} className="bg-primary text-lightBg px-7 py-2 font-bold  rounded-md"> PAY NOW</Link>
                            </div>

                        </div>




                    </div>

                </div>

            </div>

        </div>
    </>
}
