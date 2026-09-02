'use client'

import { Button } from '@yuki/ui/components/button'
import { MoonIcon, SunIcon } from '@yuki/ui/components/icons'
import { useMounted } from '@yuki/ui/hooks/use-mounted'
import { useTheme } from 'next-themes'

export const ToggleTheme: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()
  if (!mounted)
    return <Button variant='outline' size='icon-sm' aria-label='Toggle theme' />

  return (
    <Button
      variant='outline'
      size='icon-sm'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label='Toggle theme'
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
