import '@/app/globals.css'

import { Geist, Geist_Mono } from 'next/font/google'

import { cn } from '@yuki/ui'
import { Sidebar, SidebarInset } from '@yuki/ui/sidebar'

import { Footer } from '@/app/_components/footer'
import { Providers } from '@/app/_components/providers'
import { SidebarContent } from '@/app/_components/sidebar-content'
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
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-dvh w-full font-mono antialiased',
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <Providers>
          <Sidebar>
            <SidebarContent />
          </Sidebar>

          <SidebarInset>
            {children} <Footer />
          </SidebarInset>
        </Providers>
      </body>
    </html>
  )
}

export const metadata = createMetadata()
