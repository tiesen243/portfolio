import '@/app/globals.css'

import { Analytics } from '@vercel/analytics/next'
import { cn } from 'fumadocs-ui/components/api'
import { RootProvider } from 'fumadocs-ui/provider'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { Footer } from '@/components/footer'
import { seo } from '@/lib/seo'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn('flex min-h-dvh flex-col font-sans', GeistSans.variable, GeistMono.variable)}
    >
      <RootProvider
        theme={{ attribute: 'class', defaultTheme: 'dark', disableTransitionOnChange: true }}
      >
        {children}
        <Footer />
      </RootProvider>

      <Analytics />
    </body>
  </html>
)

export default RootLayout

export const metadata = seo({})
