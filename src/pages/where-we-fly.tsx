import PageBanner from '@/components/UI/PAges/PageBanner'
import RootLayout from '@/components/layouts/RootLayout';
import Link from 'next/link';
import { useGetFlightsQuery } from '../redux/api/api';
import { baseUrl } from '@/components/utils/url';
import { IFlightDeal } from '@/components/utils/Types';
import FlightCard from '@/components/UI/PAges/FlightCard';

export default function WhereWEFlyPage({ flightsPlan }: { flightsPlan: IFlightDeal[] }) {
    // console.log(flightsPlan);


    return (
        <div className='bg-lightBg'>
            <PageBanner>
                <div className='text-center '>
                    <h1 className='text-5xl font-bold  '>OUR PACKAGES</h1>
                    <p className='text-semibold   mt-2'><Link href={"/"}>HOME</Link> / <span className='text-secondary'>OUR PACKAGES</span></p>
                </div>
            </PageBanner>
            <div className='max-w-7xl mx-auto px-5 lg:px-0 py-10'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        flightsPlan?.map(data => <FlightCard key={data.id} flight={data} />)
                    }
                </div>

                <div>

                </div>


            </div>
        </div>
    )
};

WhereWEFlyPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};



export const getServerSideProps = async () => {
    const res = await fetch(`${baseUrl}/deal`);
    const data = await res.json();

    return {
        props: {
            flightsPlan: data,
        }
    }
};
