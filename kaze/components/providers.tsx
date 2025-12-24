import { ThemeProvider } from '@yuki/ui'
import { NvimStatuslineProvider } from '@yuki/ui/nvim-statusline'
import { SidebarProvider } from '@yuki/ui/sidebar'

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      disableTransitionOnChange
      enableSystem
    >
      <SidebarProvider>
        <NvimStatuslineProvider>{children}</NvimStatuslineProvider>
      </SidebarProvider>
    </ThemeProvider>
  )
}
