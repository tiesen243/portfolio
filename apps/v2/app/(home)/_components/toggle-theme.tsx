'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { useMounted } from '@/hooks/use-mouted'

export const ToggleTheme: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()
  if (!mounted) return <Button variant='ghost' size='icon-sm' />

  return (
    <Button
      variant='ghost'
      size='icon-sm'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
