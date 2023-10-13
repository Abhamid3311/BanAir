import RootLayout, { RootLayoutProps } from '@/components/layouts/RootLayout';
import React from 'react';

const PageBanner = ({ children }: RootLayoutProps) => {
    return (
        <div className='w-full h-[40vh] bg-gray-200 flex items-center justify-center'>
            <h1 className='text-4xl font-bold text-primary'>{children}</h1>
        </div>
    );
};

export default PageBanner;

