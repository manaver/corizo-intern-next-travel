import UserFooter from "@/components/layout/userFooter";
import UserNav from "@/components/layout/userNav";
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { WishlistProvider } from "@/provider/wishlist-provider";

const inter = Inter({ subsets: ['latin'] })

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
        <html lang="en"
            className={`${inter.className} h-full scroll-smooth antialiased`}
        >
            <body className={'scrollbar-hide text-slate-700'}>
                <ClerkProvider>
                    <WishlistProvider>
                        <UserNav />
                        {children}
                        <UserFooter />
                    </WishlistProvider>
                </ClerkProvider>
            </body>
        </html>
    )
}
