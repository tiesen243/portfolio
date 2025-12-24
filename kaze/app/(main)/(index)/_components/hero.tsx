import {
  ContactIcon,
  DownloadIcon,
  FolderKanbanIcon,
  RssIcon,
} from '@yuki/ui/icons'
import { Typography } from '@yuki/ui/typography'
import Image from 'next/image'
import Link from 'next/link'

import Tiesen from '@/public/assets/logotype.png'

export function HeroSection() {
  return (
    <section
      id='hero'
      className='container flex min-h-dvh max-w-2xl flex-col items-center justify-center'
    >
      <h2 className='sr-only'>Hero section</h2>

      <code className='mb-6 text-primary'>&quot;use portfolio&quot;</code>

      <Image
        src={Tiesen}
        alt='Tiesen'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='mx-auto h-auto'
      />

      <Typography className='mt-6 text-center max-w-xl text-pretty'>
        You can&apos;t change your <span className='text-primary'>past</span>,
        but luckily you can still destroy your{' '}
        <span className='text-primary'>future</span> OwO.
      </Typography>

      <nav className='mt-8 flex w-full flex-col gap-4'>
        {navs.map((nav) => (
          <Link
            key={nav.label}
            href={nav.href}
            prefetch={!nav.href.endsWith('.pdf')}
            className='flex items-center justify-between'
          >
            <Typography className='inline-flex items-center gap-2'>
              <nav.icon className='size-4' />
              <span>{nav.label}</span>
            </Typography>

            <kbd data-shortcut={nav.shortcut} className='text-primary'>
              {nav.shortcut}
            </kbd>
          </Link>
        ))}
      </nav>
    </section>
  )
}

const navs = [
  {
    href: '/assets/cv.pdf',
    icon: DownloadIcon,
    label: 'Dowload Resume',
    shortcut: 'r',
  },
  {
    href: '/contact',
    icon: ContactIcon,
    label: 'Contact Me',
    shortcut: 'c',
  },
  {
    href: '/projects',
    icon: FolderKanbanIcon,
    label: 'Projects',
    shortcut: 'p',
  },
  {
    href: '/blogs',
    icon: RssIcon,
    label: 'Blogs',
    shortcut: 'b',
  },
] as const
