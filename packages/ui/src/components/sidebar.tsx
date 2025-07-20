'use client'

import * as React from 'react'

import { cn } from '@yuki/ui'
import { useMobile } from '@yuki/ui/hooks/use-mobile'
import { useMounted } from '@yuki/ui/hooks/use-mounted'

const SIDEBAR_WIDTH = '16rem'

const SidebarContext = React.createContext<{
  open: boolean
  isMobile: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleSidebar: () => void
} | null>(null)

export const useSidebar = () => {
  const context = React.use(SidebarContext)
  if (!context)
    throw new Error('useSidebar must be used within a SidebarProvider')
  return context
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const isMobile = useMobile()

  const toggleSidebar = React.useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  React.useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.ctrlKey && e.key === 'e') {
        e.preventDefault()
        toggleSidebar()
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    const abortController = new AbortController()
    document.addEventListener('keydown', handleKeydown, {
      signal: abortController.signal,
    })
    return () => {
      abortController.abort()
    }
  })

  const value = React.useMemo(
    () => ({ open, isMobile, setOpen, toggleSidebar }),
    [isMobile, open, toggleSidebar],
  )

  return <SidebarContext value={value}>{children}</SidebarContext>
}

export function Sidebar({ children }: Readonly<{ children: React.ReactNode }>) {
  const { open, setOpen, isMobile } = useSidebar()

  const isMounted = useMounted()
  if (!isMounted) return null

  if (isMobile)
    return (
      <>
        <button
          data-slot="sidebar-toggle"
          type="button"
          onClick={() => {
            setOpen(!open)
          }}
          className={cn(
            'bg-background/10 fixed inset-0 z-30 w-full backdrop-blur-xl',
            'transition-opacity duration-200 ease-linear',
            open ? 'block opacity-100' : 'hidden opacity-0',
          )}
        />
        <aside
          data-slot="sidebar"
          data-state={open ? 'open' : 'closed'}
          style={{ '--sidebar-width': SIDEBAR_WIDTH } as React.CSSProperties}
          className={cn(
            'bg-background text-sidebar-foreground fixed inset-0 z-40 flex flex-col overflow-y-auto border border-l md:hidden',
            'transition-transform duration-200 ease-linear',
            'w-(--sidebar-width) data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0',
          )}
        >
          {children}
        </aside>
      </>
    )

  return (
    <div
      data-slot="sidebar"
      data-state={open ? 'open' : 'closed'}
      className="text-sidebar-foreground group hidden md:block"
      style={{ '--sidebar-width': SIDEBAR_WIDTH } as React.CSSProperties}
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
          'border-l-secondary bg-background fixed inset-y-0 z-10 flex w-(--sidebar-width) flex-col border',
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
