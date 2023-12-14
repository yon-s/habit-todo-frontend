import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import { SEO_DEFAULT } from "../utils/seo-config";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = SEO_DEFAULT;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link href="/manifest.json" rel="manifest" />
        <link href="/icon.jpg" rel="apple-touch-icon"></link>
        <meta content="#4299E1" name="theme-color" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
