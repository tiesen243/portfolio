import '@/app/globals.css'

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from 'next-themes'

import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Footer } from '@/components/footer'

export const metadata = siteConfig.meta
export const viewport = siteConfig.viewport

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('flex flex-col font-sans', GeistSans.variable, GeistMono.variable)}>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        {children}
        <Footer />
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
