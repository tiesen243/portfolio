'use client'

import * as React from 'react'

import { cn } from '@yuki/ui'
import { useMobile } from '@yuki/ui/hooks/use-mobile'

const SidebarContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
  toggleSidebar: () => void
  isMobile: boolean
} | null>(null)

export const useSidebar = () => {
  const context = React.useContext(SidebarContext)
  if (!context)
    throw new Error('useSidebar must be used within a SidebarProvider')
  return context
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpenState] = React.useState(false)
  const isMobile = useMobile()

  const setOpen = React.useCallback((open: boolean) => {
    setOpenState(open)
  }, [])

  const toggleSidebar = React.useCallback(() => {
    setOpenState((prev) => !prev)
  }, [])

  const value = React.useMemo(
    () => ({
      open,
      setOpen,
      toggleSidebar,
      isMobile,
    }),
    [isMobile, open, setOpen, toggleSidebar],
  )

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  )
}

export function Sidebar({ children }: Readonly<{ children: React.ReactNode }>) {
  const { open, isMobile } = useSidebar()

  if (isMobile) {
    return (
      <div
        data-slot="sidebar"
        data-state={open ? 'open' : 'closed'}
        className={cn(
          'bg-background text-sidebar-foreground fixed inset-0 z-40 overflow-y-auto border border-l md:hidden',
          'transition-transform duration-200 ease-linear',
          'w-(--sidebar-width) data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0',
        )}
      >
        {children}
      </div>
    )
  }

  return (
    <div
      data-slot="sidebar"
      data-state={open ? 'open' : 'closed'}
      className="text-sidebar-foreground group hidden md:block"
    >
      <div
        data-slot="sidebar-gap"
        className={cn(
          'relative h-svh w-0 bg-transparent',
          'transition-[width] duration-200 ease-linear',
          'group-data-[state=open]:w-(--sidebar-width)',
        )}
      />

      <aside
        data-slot="sidebar-content"
        className={cn(
          'border-l-secondary bg-background fixed inset-y-0 z-10 w-64 border',
          'transition-[left] duration-200 ease-linear',
          'left-0 group-data-[state=closed]:left-[calc(var(--sidebar-width)*-1)]',
        )}
      >
        {children}
      </aside>
    </div>
  )
}

export function SidebarInset({ children }: { children: React.ReactNode }) {
  const { open } = useSidebar()

  return (
    <main
      data-slot="sidebar-inset"
      data-state={open ? 'open' : 'closed'}
      className={cn(
        'group flex min-h-dvh w-full flex-col',
        'transition-[width] duration-200 ease-linear',
      )}
    >
      {children}
    </main>
  )
}
