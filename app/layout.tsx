import '@/app/global.css'

import type { ReactNode } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { RootProvider } from 'fumadocs-ui/provider'
import { cn } from 'fumadocs-ui/utils/cn'

import { Footer } from '@/app/layout.config'
import { createMetadata } from '@/lib/metadata'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <RootProvider
          theme={{ defaultTheme: 'dark', disableTransitionOnChange: true }}
        >
          {children}

          <Footer />
        </RootProvider>

        <Analytics />
      </body>
    </html>
  )
}

export const metadata = createMetadata()
