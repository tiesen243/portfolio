'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { useMounted } from '@/hooks/use-mounted'
import { SidebarMenuButton } from './ui/sidebar'

export const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const isMouted = useMounted()
  if (!isMouted) return null

  return (
    <SidebarMenuButton
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </SidebarMenuButton>
  )
}
