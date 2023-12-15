import type { Metadata } from 'next'

import { SEO_DEFAULT } from "@/utils/seo-config";
import { Inter } from 'next/font/google'

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
        <link href="/favicons/favicon-32x32.png" rel="icon" sizes="32x32"type="image/png"/>
        <link href="/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link color="#4299E1" href="/favicons/safari-pinned-tab.svg" rel="mask-icon"/>
        <meta content="#603cba" name="msapplication-TileColor"/>
        <meta content="#ffffff" name="theme-color"/>
        <link href="/manifest.json" rel="manifest" />
        <link href="/icon.jpg" rel="apple-touch-icon"></link>
        <meta content="#4299E1" name="theme-color" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
