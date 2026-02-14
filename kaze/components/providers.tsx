import { NvimStatuslineProvider } from '@yuki/ui/nvim-statusline'
import { SidebarProvider } from '@yuki/ui/sidebar'
import { StackedToastProvider } from '@yuki/ui/toast'
import { RootProvider } from 'fumadocs-ui/provider/next'

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <RootProvider
      theme={{
        attribute: 'class',
        defaultTheme: 'dark',
        disableTransitionOnChange: true,
        enableSystem: true,
      }}
    >
      <StackedToastProvider>
        <SidebarProvider>
          <NvimStatuslineProvider>{children}</NvimStatuslineProvider>
        </SidebarProvider>
      </StackedToastProvider>
    </RootProvider>
  )
}
