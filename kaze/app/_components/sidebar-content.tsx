import type { UrlObject } from 'node:url'
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

import { ToggleTheme } from '@/app/_components/toggle-theme'
import Tiesen from '@/public/assets/logotype.png'

export function SidebarContent() {
  return (
    <>
      <div className='border-b'>
        <Image
          src={Tiesen}
          alt='Tiesen Logo'
          className='m-4 w-2/3 object-cover'
          sizes='(max-width: 768px) 100vw, 50vw'
          priority
        />
      </div>

      <nav className='flex flex-1 flex-col gap-2 px-2 py-4'>
        {navs.map((nav) => (
          <Link
            key={nav.label}
            href={nav.href as unknown as UrlObject}
            className='inline-flex items-center gap-2 rounded-md border border-transparent px-2 py-1 text-sm transition-colors hover:border-sidebar-accent hover:bg-sidebar-accent/40 hover:text-sidebar-accent-foreground'
          >
            <nav.icon className='size-4' />
            <span>{nav.label}</span>
          </Link>
        ))}
      </nav>

      <div className='flex items-center justify-between gap-4 border-t pt-4 pb-10 md:pb-4'>
        <nav className='flex items-center gap-4 pl-2'>
          {Object.entries(socials).map(([key, Icon]) => (
            <a
              key={key}
              href={`/contact/${key}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon className='size-4 hover:fill-accent-foreground' />
              <span className='sr-only'>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
            </a>
          ))}
        </nav>

        <ToggleTheme />
      </div>
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
