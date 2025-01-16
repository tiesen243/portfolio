import '@/app/globals.css'

import { Geist, Geist_Mono } from 'next/font/google'
import { cn } from 'fumadocs-ui/components/api'
import { RootProvider } from 'fumadocs-ui/provider'

import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({})

const geistSans = Geist({ variable: '--font-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-mono', subsets: ['latin'] })

export default ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'flex min-h-dvh flex-col font-sans antialiased',
        geistSans.variable,
        geistMono.variable,
      )}
    >
      <RootProvider>{children}</RootProvider>
    </body>
  </html>
)
