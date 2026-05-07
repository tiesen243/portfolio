import type { ClassValue } from 'clsx'

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { env } from '@/env'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin
  if (env.APP_URL) return `https://${process.env.APP_URL}`
  return 'http://localhost:3000'
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
  }).format(date)
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength - 3)}...`
}
