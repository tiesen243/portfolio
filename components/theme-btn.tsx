'use client'

import { Loader2Icon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Button } from '@/components/ui/button'

export const ThemeBtn: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  React.useEffect(() => setIsMounted(true), [])
  if (!isMounted)
    return (
      <Button variant="ghost" size="icon" disabled>
        <Loader2Icon className="animate-spin" />
      </Button>
    )

  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
