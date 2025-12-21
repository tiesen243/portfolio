'use client'

import { useMediaQuery } from '@base-ui/react/unstable-use-media-query'
import * as React from 'react'

import { useMounted } from '@/hooks/use-mounted'
import { cn } from '@/utils'

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
  const isMobile = useMediaQuery('(max-width: 767px)', { defaultMatches: true })
  const [open, setOpen] = React.useState(false)

  const toggleSidebar = React.useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  React.useEffect(() => {
    const abortController = new AbortController()

    document.addEventListener(
      'keydown',
      (e: KeyboardEvent) => {
        if (e.ctrlKey && e.key === 'e') {
          e.preventDefault()
          toggleSidebar()
        } else if (e.key === 'Escape') {
          e.preventDefault()
          setOpen(false)
        }
      },
      { signal: abortController.signal },
    )

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
          data-slot='sidebar-toggle'
          type='button'
          onClick={() => {
            setOpen(!open)
          }}
          className={cn(
            'fixed inset-0 z-40 h-dvh w-full bg-background/10 backdrop-blur-xl',
            'transition-opacity ease-out',
            open ? 'block opacity-100' : 'hidden opacity-0',
          )}
        />

        <aside
          data-slot='sidebar-content'
          data-state={open ? 'open' : 'closed'}
          className={cn(
            'group/sidebar fixed inset-0 z-50 flex w-(--sidebar-width) flex-col overflow-y-auto border-r bg-background text-foreground md:hidden',
            'transition-transform ease-out',
            'data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0',
          )}
          style={{ '--sidebar-width': SIDEBAR_WIDTH } as React.CSSProperties}
        >
          {children}
        </aside>
      </>
    )

  return (
    <>
      <div
        data-slot='sidebar-gap'
        data-state={open ? 'open' : 'closed'}
        className={cn(
          'h-dvh w-0',
          'transition-[width] ease-linear',
          'data-[state=open]:w-(--sidebar-width)',
        )}
        style={{ '--sidebar-width': SIDEBAR_WIDTH } as React.CSSProperties}
      />

      <aside
        data-slot='sidebar'
        data-state={open ? 'open' : 'closed'}
        className={cn(
          'group/sidebar fixed inset-y-0 z-50 hidden w-(--sidebar-width) flex-col overflow-y-auto border-r bg-background text-foreground md:flex',
          'transition-[left] ease-out',
          'data-[state=closed]:-left-(--sidebar-width) data-[state=open]:left-0',
        )}
        style={{ '--sidebar-width': SIDEBAR_WIDTH } as React.CSSProperties}
      >
        {children}
      </aside>
    </>
  )
}

export function SidebarInset({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const { open } = useSidebar()

  return (
    <div
      data-slot='sidebar-inset'
      data-state={open ? 'open' : 'closed'}
      className={cn(
        'flex min-h-dvh w-full flex-col',
        'transition-[width] ease-linear',
        'md:data-[state=open]:w-[calc(100%-var(--sidebar-width))]',
        className,
      )}
      style={{ '--sidebar-width': SIDEBAR_WIDTH } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  )
}
