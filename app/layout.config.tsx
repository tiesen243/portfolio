import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import Image from 'next/image'
import { ContactIcon, PanelsTopLeftIcon, RssIcon } from 'lucide-react'

export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/tiesen243',
  nav: {
    title: (
      <>
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} className="dark:invert" />
        <span>Tiesen</span>
      </>
    ),
    transparentMode: 'top',
  },
  links: [
    { icon: <PanelsTopLeftIcon />, text: 'Projects', url: '/projects', active: 'nested-url' },
    { icon: <ContactIcon />, text: 'Contact', url: '/contact', active: 'nested-url' },
    { icon: <RssIcon />, text: 'Blog', url: '/blog', active: 'nested-url' },
  ],
}
