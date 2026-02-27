import '@/app/globals.css'

import { cn } from '@yuki/ui'
import { Sidebar, SidebarInset } from '@yuki/ui/sidebar'
import { Geist, Geist_Mono } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Providers } from '@/components/providers'
import { SidebarContent } from '@/components/sidebar-content'
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-dvh w-full font-mono antialiased',
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>
          <Sidebar>
            <SidebarContent />
          </Sidebar>

          <SidebarInset>
            {children}
            <Footer />
          </SidebarInset>
        </Providers>
      </body>
    </html>
  )
}

export const metadata = createMetadata()
