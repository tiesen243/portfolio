import {
  ContactIcon,
  DownloadIcon,
  FolderKanbanIcon,
  RssIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '@/components/ui/typography'
import Logotype from '@/public/assets/logotype.png'

export function HeroSection() {
  return (
    <section
      id='hero'
      className='relative container flex min-h-[calc(100dvh-3.5rem)] flex-col items-center justify-center'
    >
      <h2 className='sr-only'>Hero section</h2>

      <div
        className='pointer-events-none absolute inset-0 -z-10 h-full w-full'
        style={{
          backgroundSize: '48px 48px',
          backgroundImage: `
            linear-gradient(to right, var(--color-secondary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-secondary) 1px, transparent 1px)
          `,

          maskImage:
            'radial-gradient(circle at center, var(--color-background) 0%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, var(--color-background) 0%, transparent 100%)',
        }}
      />

      <code className='text-primary'>&quot;use portfolio&quot;</code>

      <Image
        src={Logotype}
        alt='Tiesen'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='mx-auto my-8 h-auto w-full max-w-4xl object-cover'
      />

      <Typography className='max-w-xl text-center text-pretty [&_span]:text-primary'>
        You can&apos;t change your <span>past</span>, but luckily you can still
        destroy your <span>future</span> OwO.
      </Typography>

      <nav className='mt-6 flex w-full max-w-2xl flex-col gap-4'>
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
    href: '/blogs',
    icon: RssIcon,
    label: 'Blogs',
    shortcut: 'b',
  },
  {
    href: '/projects',
    icon: FolderKanbanIcon,
    label: 'Projects',
    shortcut: 'p',
  },
] as const
