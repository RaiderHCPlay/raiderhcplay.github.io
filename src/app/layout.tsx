import type { Metadata } from 'next'
import React from 'react'
import './styles/global.scss';


export const metadata: Metadata = {
    title: 'Paweł Fabrycki',
    description: "RaiderHCPlay's personal website",
    icons: 'https://avatars.githubusercontent.com/u/170134946?v=4',
    keywords: 'RaiderHCPlay, github, personal website',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={'scroll-smooth'}>
            <body
                className={`antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
