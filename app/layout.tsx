import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs';

const font = Poppins({subsets: ["latin-ext"], weight: ['400', '700']});

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Kshitij Bhardwaj',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
