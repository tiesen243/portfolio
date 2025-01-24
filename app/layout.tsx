import '@/styles/globals.css'

import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import { createMetadata } from '@/lib/metadata'
import { cn } from '@/lib/utils'

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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('font-sans antialiased', geistSans.variable, geistMono.variable)}
      >
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
          <footer className="border-t py-6">
            <div className="flex items-center justify-center gap-4">
              <p>Copyright (c) {new Date().getFullYear()} Tiesen. All Rights Reserved.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = createMetadata({})
