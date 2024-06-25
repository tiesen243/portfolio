'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => setIsMounted(true), [])
  if (!isMounted) return null

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
