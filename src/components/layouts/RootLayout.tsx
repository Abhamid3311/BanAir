import React, { ReactNode } from 'react'
import Header from './Header'
import Footers from './Footer';

export interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footers />
        </>
    )
}
