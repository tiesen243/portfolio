import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import Image from 'next/image'

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
