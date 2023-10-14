import RootLayout, { RootLayoutProps } from '@/components/layouts/RootLayout';
import React from 'react';

const PageBanner = ({ children }: RootLayoutProps) => {
    return (
        <div className='w-full min-h-[30vh] page-Banner flex items-center justify-center text-white'>
            {children}
        </div>
    );
};

export default PageBanner;

