import '@/app/globals.css'

import { Analytics } from '@vercel/analytics/next'
import { RootProvider } from 'fumadocs-ui/provider'
import { GeistSans } from 'geist/font/sans'

import { Footer } from '@/components/footer'

import { seo } from '@/lib/seo'
import { cn } from '@/lib/utils'

export const metadata = seo({})

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'flex min-h-dvh flex-col bg-background font-sans text-foreground antialiased',
        GeistSans.variable,
      )}
    >
      <RootProvider
        theme={{
          attribute: 'class',
          defaultTheme: 'dark',
          disableTransitionOnChange: true,
        }}
      >
        {children}
        <Footer />
      </RootProvider>

      <Analytics />
    </body>
  </html>
)

export default RootLayout
