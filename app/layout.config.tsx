import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import Image from 'next/image'
import Link from 'next/link'

import { FacebookIcon, XIcon } from '@/components/ui/icons'
import Tiesen from '@/public/assets/tiesen.png'

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <Image
        src={Tiesen}
        alt="Logo"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
        className="h-10 w-auto"
      />
    ),
  },
  githubUrl: 'http://github.com/tiesen243',
  links: [
    {
      text: 'Blogs',
      url: '/blogs',
      active: 'nested-url',
    },
    {
      text: 'Projects',
      url: '/projects',
      active: 'nested-url',
    },
    {
      text: 'X',
      url: 'https://www.x.com/tiesen243',
      icon: <XIcon />,
      type: 'icon',
    },
    {
      text: 'Facebook',
      url: 'https://www.facebook.com/tiesen243.nanoda',
      icon: <FacebookIcon />,
      type: 'icon',
    },
  ],
}

export const Footer: React.FC = () => {
  const navs = [
    { href: '/', title: 'Home' },
    { href: '/projects', title: 'Projects' },
    { href: '/blogs', title: 'Blogs' },
  ]

  return (
    <footer className="text-fd-muted-foreground border-t py-6 text-sm">
      <div className="container flex flex-col gap-4">
        <nav className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              width={24}
              height={24}
              alt="Tiesen Logo"
              className="size-6 dark:invert"
            />
            <span className="sr-only">Tiesen</span>
          </Link>

          {navs.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              className="hover:text-fd-foreground"
            >
              {nav.title}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center justify-between">
            <p>© {new Date().getFullYear()} Tiesen</p>

            <nav className="flex items-center gap-4">
                <Link href="/sitemap.xml" className="hover:text-fd-foreground">
                    Sitemap
                </Link>
                <Link href="/api/rss" className="hover:text-fd-foreground">
                    RSS
                </Link>
            </nav>
        </div>
      </div>
    </footer>
  )
}
