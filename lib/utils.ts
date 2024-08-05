import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { unstable_cache as cache } from 'next/cache'
import { getGithubLastEdit } from 'fumadocs-core/server'
import { resolve } from 'path'

import { env } from '@/env'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getLastModifiedTime = cache(
  async (path: string): Promise<Date> => {
    const time = await getGithubLastEdit({
      owner: 'tiesen243',
      repo: 'portfolio',
      path: resolve('/content/blog/', path),
      token: `Bearer ${env.GIT_TOKEN}`,
    })

    if (!time) return new Date()

    return new Date(time)
  },
  ['modified-time'],
  { revalidate: 60 * 60 * 24 * 7 },
)
