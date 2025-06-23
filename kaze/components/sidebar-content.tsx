import Image from 'next/image'
import Link from 'next/link'

import { FolderKanbanIcon, HomeIcon, MailIcon, RssIcon } from '@yuki/ui/icons'

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
