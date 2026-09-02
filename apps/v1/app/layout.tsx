import '@/app/globals.css'

import { RootProvider } from '@fumadocs/base-ui/provider/next'
import { cn } from '@yuki/ui/lib/utils'
import { Geist, Geist_Mono } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          geist.variable,
          geistMono.variable,
          'flex min-h-screen flex-col font-mono tracking-tight antialiased'
        )}
      >
        <RootProvider theme={{ disableTransitionOnChange: true }}>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
