import '@/app/globals.css'

import { Noto_Serif_Georgian, Geist, Geist_Mono } from 'next/font/google'

import { Header } from '@/components/header'
import { Provider } from '@/components/provider'
import { Terminal } from '@/components/terminal'
import { createMetadata } from '@/lib/create-metadata'
import { cn } from '@/lib/utils'

const georgianSerif = Noto_Serif_Georgian({ variable: '--font-serif' })
const geistSans = Geist({ variable: '--font-sans' })
const geistMono = Geist_Mono({ variable: '--font-mono' })

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className='light' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-dvh flex-col bg-background px-4 pb-8 font-mono text-foreground antialiased',
          georgianSerif.variable,
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Provider>
          <Header />

          <Terminal>{children}</Terminal>
        </Provider>
      </body>
    </html>
  )
}

export const metadata = createMetadata({
  openGraph: {
    images: '/api/og?title=&description=&image=/assets/logotype.png',
  },
})
