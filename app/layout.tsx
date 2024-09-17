import '@/app/globals.css'

import { RootProvider } from 'fumadocs-ui/provider'
import { GeistSans } from 'geist/font/sans'

import { seo } from '@/lib/seo'
import { cn } from '@/lib/utils'

export const metadata = seo({})

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'min-h-dvh bg-background font-sans text-foreground antialiased',
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
      </RootProvider>
    </body>
  </html>
)

export default RootLayout
