import Image from 'next/image'
import Link from 'next/link'
import * as Base from 'fumadocs-core/sidebar'
import { SidebarIcon } from 'lucide-react'

import { ThemeSwitch } from '@/components/theme-switch'
import { buttonVariants } from '@/components/ui/button'
import { getPages } from '@/content'
import { socials } from '@/data'
import { cn } from '@/lib/utils'
import Tiesen from '@/public/assets/tiesen.png'

export default async function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pages = await getPages()

  const navs = [
    {
      label: 'Navigations',
      items: [
        { url: '/', name: 'Home' },
        { url: '/projects', name: 'Projects' },
        { url: '/blogs', name: 'Blogs' },
      ],
    },
    {
      label: 'Blogs',
      items: pages
        .map((page) => ({
          name: page.frontmatter.title,
          url: `/blogs/${page.slug.join('/')}`,
        }))
        .filter((page) => page.name),
    },
  ]

  return (
    <Base.SidebarProvider>
      <Base.SidebarTrigger
        className={buttonVariants({
          variant: 'ghost',
          size: 'icon',
          className: 'fixed bottom-2 left-2 h-6 w-6',
        })}
      >
        <SidebarIcon className="size-4" />
      </Base.SidebarTrigger>

      <Base.SidebarList
        className={cn(
          '-translate-x-full transition-transform ease-linear data-[open=true]:translate-x-0',
          'bg-sidebar text-sidebar-foreground fixed z-50 min-h-svh w-64',
          'flex flex-col justify-between',
        )}
      >
        <div className="grid gap-6 p-2">
          <Image src={Tiesen} alt="Tiesen" className="w-2/3" priority />

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
          <div className="flex items-center gap-2">
            <ThemeSwitch />
            <Base.SidebarTrigger
              className={buttonVariants({
                variant: 'ghost',
                size: 'icon',
                className: 'h-6 w-6',
              })}
            >
              <SidebarIcon className="size-4" />
            </Base.SidebarTrigger>
          </div>
        </div>
      </Base.SidebarList>

      <main className="mx-auto max-w-[calc(100svh-16rem)]">{children}</main>
    </Base.SidebarProvider>
  )
}
