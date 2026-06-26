import '@/app/globals.css'

import { Geist_Mono } from 'next/font/google'

import { cn } from '@/lib/utils'

const geistMono = Geist_Mono({ variable: '--font-mono' })

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={cn('font-mono', geistMono.variable)}>
      <body>{children}</body>
    </html>
  )
}
