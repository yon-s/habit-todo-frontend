import type { Metadata } from 'next'

import TypekitLoader from '@/components/TypekitLoader'
import { css } from "@/styled-system/css";
import { SEO_DEFAULT } from "@/utils/seo-config";

import './globals.css'

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
        <link href={`https://use.typekit.net/${process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT_ID_EN}.css`} rel="stylesheet"></link>
        <meta content="#4299E1" name="theme-color" />
      </head>
      <TypekitLoader kitId={process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT_ID_JA || ''} />
      <body className={css({
        fontFamily: 'open-sans, hiragino-kaku-gothic-pron, sans-serif ',
        fontFeatureSettings: 'palt',
        fontStyle: 'normal',
        fontWeight: '400',
      })}>
        {children}
      </body>
    </html>
  )
}
