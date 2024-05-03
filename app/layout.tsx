import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import Footer from '@/components/footer'
import Provider from '@/components/provider'
import { fonts } from '@/lib/fonts'
import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'
import './globals.css'

export const metadata = siteConfig.meta
export const viewport = siteConfig.viewport

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'flex min-h-dvh flex-col gap-4 bg-background font-sans text-foreground antialiased',
        fonts,
      )}
    >
      <Provider>
        <main className="container flex-grow">{children}</main>
        <Footer />
      </Provider>

      <SpeedInsights />
      <Analytics />
    </body>
  </html>
)

export default RootLayout
