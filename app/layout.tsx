import '@/app/global.css'

import { Geist, Geist_Mono } from 'next/font/google'
import { cn } from 'fumadocs-ui/components/api'
import { RootProvider } from 'fumadocs-ui/provider'

import { seo } from '@/lib/seo'

const geistSans = Geist({ variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ variable: '--font-geist-mono' })

export default ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'flex min-h-screen flex-col font-sans antialiased',
        geistSans.variable,
        geistMono.variable,
      )}
    >
      <RootProvider>{children}</RootProvider>
    </body>
  </html>
)

export const metadata = seo({})
