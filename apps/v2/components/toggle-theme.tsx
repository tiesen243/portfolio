'use client'

import { Button } from '@yuki/ui/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@yuki/ui/components/dropdown-menu'
import { LaptopIcon, MoonIcon, SunIcon } from '@yuki/ui/components/icons'
import { useMounted } from '@yuki/ui/hooks/use-mounted'
import { useTheme } from 'next-themes'

export const ToggleTheme: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()
  if (!mounted)
    return <Button variant='outline' size='icon-sm' aria-label='Toggle theme' />

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant='outline' size='icon-sm' aria-label='Toggle theme' />
        }
      >
        {theme === 'light' && <SunIcon />}
        {theme === 'dark' && <MoonIcon />}
        {theme === 'system' && <LaptopIcon />}
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <SunIcon /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <MoonIcon /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <LaptopIcon /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
