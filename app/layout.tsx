import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from 'next-themes'

import { Footer } from '@/components/footer'
import { font } from '@/lib/font'
import { siteConfig } from '@/lib/site'
import './globals.css'

export const metadata = siteConfig.meta

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" className="dark" suppressHydrationWarning>
    <body className={`${font} flex flex-col gap-4 font-sans`}>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        <main className="container flex-1">{children}</main>
        <Footer />
      </ThemeProvider>

      <Analytics />
      <SpeedInsights />
    </body>
  </html>
)

export default RootLayout
