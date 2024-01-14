import UserNav from "@/components/layout/userNav";
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['greek-ext'] })

export const metadata: Metadata = {
    title: 'Trip Fever',
    description: 'Travel along with us!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className+ ' ' + ' scrollbar-hide'}>
                    <UserNav />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
