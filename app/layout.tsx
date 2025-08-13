import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caldot Global Services - Your All-in-One Partner for Quality Services',
  description: 'Caldot Global Services offers comprehensive solutions including general merchandise, procurement, automobile maintenance, logistics, and interior decoration services.',
  keywords: 'Caldot, Global Services, Procurement, Logistics, Automobile Maintenance, Interior Decoration, General Merchandise',
  authors: [{ name: 'Caldot Global Services' }],
  metadataBase: new URL('https://caldotglobalservices.com'),
  openGraph: {
    title: 'Caldot Global Services - Your All-in-One Partner for Quality Services',
    description: 'Comprehensive business solutions including procurement, logistics, automobile maintenance, and interior decoration services.',
    url: 'https://caldotglobalservices.com',
    siteName: 'Caldot Global Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Caldot Global Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caldot Global Services - Your All-in-One Partner for Quality Services',
    description: 'Comprehensive business solutions including procurement, logistics, automobile maintenance, and interior decoration services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
