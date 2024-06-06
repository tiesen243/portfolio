'use client'

import { useTheme } from 'next-themes'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
import React from 'react'

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  React.useEffect(() => setIsMounted(true), [])
  if (!isMounted) return null

  return (
    <Tabs defaultValue={theme}>
      <TabsList>
        <TabsTrigger
          value="light"
          onClick={() => setTheme('light')}
          aria-label="Switch to light theme"
        >
          Light
        </TabsTrigger>

        <TabsTrigger
          value="dark"
          onClick={() => setTheme('dark')}
          aria-label="Switch to dark theme"
        >
          Dark
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
