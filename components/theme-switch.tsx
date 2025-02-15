'use client'

import { useTheme } from 'next-themes'

import { Switch } from '@/components/ui/switch'
import { useMounted } from '@/hooks/use-mounted'

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const isMouted = useMounted()
  if (!isMouted) return <Switch />

  return (
    <Switch
      checked={theme === 'dark'}
      onCheckedChange={(checked) => {
        setTheme(checked ? 'dark' : 'light')
      }}
    />
  )
}
