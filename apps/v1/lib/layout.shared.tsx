import type { BaseLayoutProps } from '@fumadocs/base-ui/layouts/shared'

import Image from 'next/image'

import logotype from '@/assets/logotype.png'
import { appName, gitConfig } from '@/lib/shared'

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Image
          src={logotype}
          alt={appName}
          className='h-10 w-auto object-cover'
          sizes='(max-width: 768px) 100vw, 120px'
        />
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  }
}
