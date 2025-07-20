import Image from 'next/image'
import Link from 'next/link'

import {
  FacebookIcon,
  FolderKanbanIcon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  MailIcon,
  RssIcon,
  XFormerTwitterIcon,
} from '@yuki/ui/icons'

import { ToggleTheme } from '@/components/toggle-theme'
import Tiesen from '@/public/assets/images/tiesen.png'

export function SidebarContent() {
  return (
    <>
      <section className="border-b">
        <Image
          src={Tiesen}
          alt="Tiesen Logo"
          className="m-4 w-2/3 object-cover"
        />
      </section>

      <section className="flex-1">
        <nav className="flex flex-col gap-2 px-2 py-4">
          {navs.map((nav) => (
            <Link
              key={nav.label}
              href={nav.href}
              className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm transition-colors"
            >
              <nav.icon className="size-4" />
              <span>{nav.label}</span>
            </Link>
          ))}
        </nav>
      </section>

      <section className="flex items-center justify-between gap-4 border pt-4 pb-10 md:pb-4">
        <nav className="flex items-center gap-4 pl-2">
          {Object.entries(socials).map(([key, Icon]) => (
            <a
              key={key}
              href={`/contact/${key}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="hover:fill-muted-foreground size-4" />
              <span className="sr-only">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
            </a>
          ))}
        </nav>

        <ToggleTheme />
      </section>
    </>
  )
}

const navs = [
  {
    label: 'Home',
    href: '/',
    icon: HomeIcon,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: MailIcon,
  },
  {
    label: 'Blogs',
    href: '/blogs',
    icon: RssIcon,
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: FolderKanbanIcon,
  },
]

const socials = {
  github: GithubIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  x: XFormerTwitterIcon,
}
