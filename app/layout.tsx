import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import Footer from '@/components/footer'
import { fonts } from '@/lib/fonts'
import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'
import './globals.css'

export const metadata = siteConfig.meta
export const viewport = siteConfig.viewport

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('font-sans', fonts)}>
      <main className="container flex-grow">{children}</main>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </body>
  </html>
)

export default RootLayout
