import '@/app/global.css'

import { cn } from 'fumadocs-ui/components/api'
import { RootProvider } from 'fumadocs-ui/provider'

import { geistMono, geistSans } from '@/lib/fonts'
import { seo } from '@/lib/seo'

export default ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'flex min-h-screen flex-col font-sans antialiased',
        geistSans.variable,
        geistMono.variable,
      )}
    >
      <RootProvider>{children}</RootProvider>
    </body>
  </html>
)

export const metadata = seo({})
