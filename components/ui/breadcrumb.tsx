'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import * as React from 'react'

interface BreadCrumbsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: {
    name: string
    href: string
  }[]
  separator?: string
}
export const BreadCrumbs = React.forwardRef<HTMLUListElement, BreadCrumbsProps>(
  ({ items, className, separator = '/' }, ref) => (
    <ul ref={ref} className={cn('my-4 flex items-center gap-2', className)}>
      {items.map(({ name, href }, idx) => (
        <li key={idx} className="text-2xl font-medium ">
          <Link
            href={href}
            className={cn('underline-offset-4 hover:underline', {
              'text-muted-foreground': idx !== items.length - 1,
            })}
          >
            {name}
          </Link>
          {idx < items.length - 1 && <span className="ml-2">{separator}</span>}
        </li>
      ))}
    </ul>
  ),
)

BreadCrumbs.displayName = 'BreadCrumbs'
