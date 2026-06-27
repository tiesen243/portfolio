import { ThemeProvider } from 'next-themes'

export const Provider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => (
  <ThemeProvider
    attribute='class'
    defaultTheme='system'
    disableTransitionOnChange
    enableSystem
  >
    {children}
  </ThemeProvider>
)
