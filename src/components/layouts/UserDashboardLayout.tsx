import React from 'react'
import { RootLayoutProps } from './RootLayout'
import Header from './Header'
import Sidebars from './Sidebar'

export default function UserDashboardLayout({ children }: RootLayoutProps) {
    return (
        <div>
            <>
                <Header />
                <div className='flex '>
                    <Sidebars />
                    <div>
                        {children}
                    </div>
                </div>

            </>

        </div>
    )
}
