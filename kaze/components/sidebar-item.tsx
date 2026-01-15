'use client'

import type { Route } from 'next'

import { SidebarItem as YukiSidebarItem } from '@yuki/ui/sidebar'
import { usePathname, useRouter } from 'next/navigation'

export const SidebarItem = ({
  href = '/',
  className = '',
  ...props
}: React.ComponentProps<typeof YukiSidebarItem> & { href: string }) => {
  const pathName = usePathname()
  const router = useRouter()

  return (
    <YukiSidebarItem
      {...props}
      isActive={pathName === href}
      className={`cursor-pointer ${className}`}
      onClick={() => router.push(href as Route)}
    />
  )
}
