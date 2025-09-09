'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

import { cn } from '@yuki/ui'

interface KeyProps extends React.ComponentProps<'kbd'> {
  href: string
  'data-shortcut'?: string
}

export function ShortcutKey({ href, className, ...props }: KeyProps) {
  const router = useRouter()

  React.useEffect(() => {
    const shortcut = props['data-shortcut'] ?? ''
    if (!shortcut) return

    const abortController = new AbortController()
    const keys = shortcut.split('+').map((key) => key.trim().toLowerCase())
    const mainKey = keys.pop()
    const ctrl = keys.includes('ctrl') || keys.includes('control')
    const alt = keys.includes('alt') || keys.includes('option')
    const shift = keys.includes('shift')
    const meta =
      keys.includes('meta') || keys.includes('cmd') || keys.includes('command')

    document.addEventListener(
      'keydown',
      (e: KeyboardEvent) => {
        if (
          e.key.toLowerCase() === mainKey &&
          e.ctrlKey === ctrl &&
          e.altKey === alt &&
          e.shiftKey === shift &&
          e.metaKey === meta
        ) {
          e.preventDefault()
          router.push(href)
        }
      },
      { signal: abortController.signal },
    )

    return () => {
      abortController.abort()
    }
  }, [href, props, router])

  return (
    <kbd
      data-slot="key"
      className={cn(
        'inline-flex gap-2 font-mono text-sm font-medium',
        className,
      )}
      {...props}
    />
  )
}
