'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Base from 'fumadocs-core/sidebar'
import { ChevronDownIcon, SidebarIcon } from 'lucide-react'

import { ThemeSwitch } from '@/components/theme-switch'
import { Button } from '@/components/ui/button'
import { socials } from '@/data'
import { useIsMobile } from '@/hooks/use-mobile'
import { useMounted } from '@/hooks/use-mounted'
import { cn } from '@/lib/utils'
import Tiesen from '@/public/assets/tiesen.png'

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7

interface BlogsLayoutClientProps {
  children: React.ReactNode
  navs: { label: string; items: { name: string; url: string }[] }[]
}

export const BlogsLayoutClient: React.FC<BlogsLayoutClientProps> = ({
  navs,
  children,
}) => {
  const isMobile = useIsMobile()

  if (isMobile)
    return (
      <>
        <MobileHeader navs={navs} />
        {children}
      </>
    )

  return <Sidebar navs={navs}>{children}</Sidebar>
}

const MobileHeader: React.FC<{ navs: BlogsLayoutClientProps['navs'] }> = ({
  navs,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          'bg-background/70 sticky inset-0 z-50 flex h-16 items-center border-b backdrop-blur-xl backdrop-saturate-150',
          !open && 'shadow-lg',
        )}
      >
        <div className="container flex items-center justify-between">
          <Image src={Tiesen} alt="Tiesen" className="h-12 w-auto" priority />

          <ChevronDownIcon
            className={cn(
              'text-muted-foreground hover:text-foreground size-6 transition-transform',
              open ? 'rotate-180' : 'rotate-0',
            )}
            onClick={() => {
              setOpen((prev) => !prev)
            }}
          />
        </div>
      </header>

      <aside
        className={cn(
          'bg-background/70 fixed top-16 left-0 z-40 w-full border-b shadow-lg backdrop-blur-xl transition-transform',
          open ? '-translate-y-0' : 'top-0 -translate-y-full',
        )}
      >
        <div className="grid gap-6 px-6 py-4">
          {navs.map((nav) => (
            <nav key={nav.label} className="grid gap-0.5">
              <span className="text-sidebar-foreground/70 pl-2 text-xs font-medium">
                {nav.label}
              </span>
              {nav.items.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 truncate rounded-md p-2 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="border-sidebar-border flex items-center justify-between gap-4 border-t px-6 py-4">
          <nav className="flex items-center gap-2">
            {socials.map((social) => (
              <Link
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon className="size-4" />
              </Link>
            ))}
          </nav>
          <ThemeSwitch />
        </div>
      </aside>

      {open && (
        <div
          className="fixed inset-0 z-30 h-dvh w-svh"
          onClick={() => {
            setOpen(false)
          }}
        />
      )}
    </>
  )
}

const Sidebar: React.FC<BlogsLayoutClientProps> = ({ navs, children }) => {
  const getCookieValue = useCallback(() => {
    if (typeof document === 'undefined') return false
    const match = new RegExp(`(^| )${SIDEBAR_COOKIE_NAME}=([^;]+)`).exec(
      document.cookie,
    )
    return match ? match[2] === 'true' : false
  }, [])

  const [open, _setOpen] = useState<boolean>(() => getCookieValue())

  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === 'function' ? value(open) : value
      _setOpen(openState)

      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [open],
  )

  const isMouted = useMounted()
  if (!isMouted) return children

  return (
    <Base.SidebarProvider open={open} onOpenChange={setOpen}>
      <Base.SidebarTrigger
        as={Button}
        variant="ghost"
        size="icon"
        className="fixed bottom-4 left-4 z-50"
      >
        <SidebarIcon />
      </Base.SidebarTrigger>

      <Base.SidebarList
        className={cn(
          '-translate-x-full transition-transform ease-linear data-[open=true]:translate-x-0',
          'bg-sidebar text-sidebar-foreground fixed z-50 min-h-dvh w-64',
          'flex flex-col justify-between',
        )}
      >
        <div className="grid gap-6 p-2">
          <div className="flex items-start justify-between">
            <Image src={Tiesen} alt="Tiesen" className="w-2/3" priority />

            <Base.SidebarTrigger as={Button} variant="ghost" size="icon">
              <SidebarIcon className="size-4" />
            </Base.SidebarTrigger>
          </div>

          {navs.map((nav) => (
            <nav key={nav.label} className="grid gap-0.5">
              <span className="text-sidebar-foreground/70 pl-2 text-xs font-medium">
                {nav.label}
              </span>
              {nav.items.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 truncate rounded-md p-2 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="border-sidebar-border flex items-center justify-between gap-4 border-t p-2">
          <nav className="flex items-center gap-2">
            {socials.map((social) => (
              <Link
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon className="size-4" />
              </Link>
            ))}
          </nav>
          <ThemeSwitch />
        </div>
      </Base.SidebarList>

      {children}
    </Base.SidebarProvider>
  )
}
