'use client'
import { RootProvider } from '@fumadocs/base-ui/provider/next'

import SearchDialog from '@/components/search'
import { ToastProvider } from '@/components/ui/toast'

export function Provider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <RootProvider
      search={{ SearchDialog }}
      theme={{ disableTransitionOnChange: true }}
    >
      <ToastProvider>{children}</ToastProvider>
    </RootProvider>
  )
}
