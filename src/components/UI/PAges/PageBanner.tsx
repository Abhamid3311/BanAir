import RootLayout, { RootLayoutProps } from '@/components/layouts/RootLayout';
import React from 'react';

const PageBanner = ({ children }: RootLayoutProps) => {
    return (
        <div className='w-full h-[30vh] bg-gray-200 flex items-center justify-center'>
            {children}
        </div>
    );
};

export default PageBanner;

