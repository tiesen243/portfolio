import '@/app/globals.css'

import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import { cn, ThemeProvider } from '@yuki/ui'
import { NvimStatuslineProvider } from '@yuki/ui/nvim-statusline'
import { Sidebar, SidebarInset, SidebarProvider } from '@yuki/ui/sidebar'

import { Footer } from '@/components/footer'
import { SidebarContent } from '@/components/sidebar-content'
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
          'flex min-h-dvh w-full font-mono antialiased',
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableColorScheme
          enableSystem
        >
          <SidebarProvider>
            <NvimStatuslineProvider>
              <Sidebar>
                <SidebarContent />
              </Sidebar>

              <SidebarInset>
                {children}
                <Footer />
              </SidebarInset>
            </NvimStatuslineProvider>
          </SidebarProvider>
        </ThemeProvider>

        <Analytics mode="production" />
      </body>
    </html>
  )
}

export const metadata = createMetadata()
