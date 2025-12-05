import '@/app/globals.css'

import { Geist, Geist_Mono, Noto_Serif_Georgian } from 'next/font/google'

import { cn, ThemeProvider } from '@yuki/ui'
import { NvimStatuslineProvider } from '@yuki/ui/nvim-statusline'
import { Sidebar, SidebarInset, SidebarProvider } from '@yuki/ui/sidebar'

import { Footer } from '@/app/_components/footer'
import { SidebarContent } from '@/app/_components/sidebar-content'
import { createMetadata } from '@/lib/metadata'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const notoSerifGeorgian = Noto_Serif_Georgian({
  variable: '--font-noto-serif-georgian',
  subsets: ['latin', 'georgian'],
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
          notoSerifGeorgian.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
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
      </body>
    </html>
  )
}

export const metadata = createMetadata()
