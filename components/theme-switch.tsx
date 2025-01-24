'use client'

import { useTheme } from 'next-themes'

import { Switch } from '@/components/ui/switch'
import { useMounted } from '@/hooks/use-mounted'

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const isMouted = useMounted()
  if (!isMouted) return null

  return (
    <Switch
      className="peer focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      checked={theme === 'dark'}
      onCheckedChange={(checked) => {
        setTheme(checked ? 'dark' : 'light')
      }}
    />
  )
}
