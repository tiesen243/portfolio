import { cache } from 'react'

import { env } from '@yuki/validators/env'

export function getBaseUrl(): string {
  if (typeof window !== 'undefined') return window.location.origin
  else if (env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  else if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`
  // eslint-disable-next-line no-restricted-properties
  return `http://localhost:${process.env.PORT ?? 3000}`
}

async function uncachedHash256(data: string): Promise<string> {
  const encodedData = new TextEncoder().encode(data)
  const hashBuffer = await crypto.subtle.digest('SHA-256', encodedData)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}
export const hash256 = cache(uncachedHash256)

export function formatDate(
  date: Date | string,
  options?: Intl.DateTimeFormatOptions,
): string {
  const defaultOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  } satisfies Intl.DateTimeFormatOptions

  const d = new Date(date)
  return d.toLocaleDateString('en-GB', { ...defaultOptions, ...options })
}
