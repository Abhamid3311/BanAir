import RootLayout from '@/components/layouts/RootLayout';
import { baseUrl } from '@/components/utils/url';
import React from 'react'

export default function PackagesDetails({ packageDetails }) {
    console.log(packageDetails)
    return (
        <div>
            PackagesDetails

        </div>
    )
};


PackagesDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};


//SSR
export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`${baseUrl}/deal/${params.id}`);
    const data = await res.json();
    console.log(data)

    return {
        props: {
            packageDetails: data,
        }
    }
};


