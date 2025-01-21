import * as React from 'react'
import Image from 'next/image'
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { ChartNoAxesGanttIcon, ContactIcon, RssIcon } from 'lucide-react'

import Logo from '@/public/assets/tiesen.png'

export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/tiesen243',
  nav: {
    title: <Image src={Logo} alt="Logo" className="w-20 md:w-24" priority />,
    transparentMode: 'top',
  },
  links: [
    {
      url: '/projects',
      text: 'Projects',
      icon: <ChartNoAxesGanttIcon />,
    },
    {
      url: '/blogs',
      text: 'Blogs',
      icon: <RssIcon />,
    },
    {
      url: 'https://gravatar.com/tiesen243',
      text: 'Contact Me',
      icon: <ContactIcon />,
      external: true,
    },
  ],
}
