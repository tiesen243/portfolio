import { ThemeProvider } from '@yuki/ui'
import { NvimStatuslineProvider } from '@yuki/ui/nvim-statusline'
import { SidebarProvider } from '@yuki/ui/sidebar'
import { StackedToastProvider } from '@yuki/ui/toast'

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
      <StackedToastProvider>
        <SidebarProvider>
          <NvimStatuslineProvider>{children}</NvimStatuslineProvider>
        </SidebarProvider>
      </StackedToastProvider>
    </ThemeProvider>
  )
}
