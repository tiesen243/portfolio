import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { env } from '@/env'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return window.location.origin
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`
  return 'http://localhost:3000'
}
