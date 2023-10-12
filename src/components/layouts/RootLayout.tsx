import React from 'react'
import Header from './Header'
import Footers from './Footer'

export default function RootLayout({ children }) {
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
