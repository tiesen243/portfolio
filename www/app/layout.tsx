import '@/app/globals.css'

import { Geist, Geist_Mono } from 'next/font/google'

import { cn, ThemeProvider } from '@yuki/ui'

import { Footer } from '@/components/footer'
import { createMetadata } from '@/lib/metadata'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-dvh flex-col font-mono antialiased',
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" disableTransitionOnChange enableSystem>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = createMetadata()
