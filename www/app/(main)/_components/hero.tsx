import Image from 'next/image'
import Link from 'next/link'

import {
  ContactIcon,
  DownloadIcon,
  FolderKanbanIcon,
  RssIcon,
} from '@yuki/ui/icons'
import { Typography } from '@yuki/ui/typography'

import Tiesen from '@/public/assets/images/tiesen.png'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="container flex min-h-dvh flex-col items-center justify-center"
    >
      <h1 className="sr-only">Hero section</h1>

      <Image
        src={Tiesen}
        alt="Tiesen"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="mx-auto h-auto w-[600px]"
      />

      <Typography className="mt-6 text-center text-pretty">
        I believe this world is{' '}
        <span className="text-normal font-medium">flat</span>, because{' '}
        <span className="text-normal font-medium">loli</span> is my world OwO
      </Typography>

      <nav className="mt-8 flex w-full max-w-xl flex-col gap-4">
        {navs.map((nav) => (
          <Link
            key={nav.label}
            href={nav.href}
            className="flex items-center justify-between"
            {...(nav.href.startsWith('https://') && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            <Typography className="inline-flex items-center gap-2 lg:text-base">
              <nav.icon className="size-4" />
              <span>{nav.label}</span>
            </Typography>

            <Typography className="text-normal">{nav.shortcut}</Typography>
          </Link>
        ))}
      </nav>
    </section>
  )
}

const navs = [
  {
    icon: DownloadIcon,
    label: 'Dowload CV',
    shortcut: 'd',
    href: 'https://youtu.be/dQw4w9WgXcQ',
  },
  {
    icon: ContactIcon,
    label: 'Contact Me',
    shortcut: 'c',
    href: '/contact',
  },
  {
    icon: FolderKanbanIcon,
    label: 'Projects',
    shortcut: 'p',
    href: '#',
  },
  {
    icon: RssIcon,
    label: 'Blogs',
    shortcut: 'b',
    href: '#',
  },
]
