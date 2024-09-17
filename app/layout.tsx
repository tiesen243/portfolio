import '@/app/globals.css'

import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from 'next-themes'

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
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
