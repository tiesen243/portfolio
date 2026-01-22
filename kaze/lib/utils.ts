import { env } from '@yuki/validators/env'

export function getBaseUrl(): string {
  if (typeof window !== 'undefined') return window.location.origin
  else if (env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  else if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`
  else if (env.NEXT_PUBLIC_APP_URL) return `https://${env.NEXT_PUBLIC_APP_URL}`

  // oxlint-disable-next-line no-process-env
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export function formatDate(
  date: Date | string,
  options?: Intl.DateTimeFormatOptions,
): string {
  const defaultOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  } satisfies Intl.DateTimeFormatOptions

  const d = new Date(date)
  return d.toLocaleDateString('en-GB', { ...defaultOptions, ...options })
}
