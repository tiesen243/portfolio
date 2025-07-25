'use client'

import { useTheme } from '@yuki/ui'
import { MoonIcon, SunIcon } from '@yuki/ui/icons'

export const ToggleTheme: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      type="button"
      className="hover:text-muted-foreground pr-2 [&_svg:not([class*='size-'])]:size-4"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">
        Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </span>
    </button>
  )
}
