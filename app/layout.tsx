import '@/app/globals.css'

import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from 'next-themes'

import { Footer } from '@/components/footer'
import { seo } from '@/lib/seo'
import { cn } from '@/lib/utils'

export const metadata = seo({})
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(0 0% 100%)' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(240 10% 3.9%)' },
  ],
}

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('flex flex-col font-sans', GeistSans.variable, GeistMono.variable)}>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        {children}
        <Footer />
      </ThemeProvider>

      <Analytics />
      <SpeedInsights />
    </body>
  </html>
)

export default RootLayout
