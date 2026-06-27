import '@/app/globals.css'

import { Noto_Serif_Georgian, Geist, Geist_Mono } from 'next/font/google'

import { Provider } from '@/components/provider'
import { Wrapper } from '@/components/wrapper'
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
          <Wrapper>{children}</Wrapper>
        </Provider>
      </body>
    </html>
  )
}

export const metadata = createMetadata({
  openGraph: { images: '/api/og' },
})
