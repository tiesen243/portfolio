'use client'

import { useTheme } from '@yuki/ui'
import { useMounted } from '@yuki/ui/hooks/use-mounted'
import { SectionSeparatorIcon } from '@yuki/ui/icons'

export function Copyright() {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const isMounted = useMounted()
  if (!isMounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="text-secondary inline-flex h-full items-center gap-0 font-bold"
    >
      <SectionSeparatorIcon className="fill-normal group-data-[state=open]:fill-visual md:bg-background size-6 rotate-270 transition-colors duration-200 ease-linear" />
      <span className="bg-normal group-data-[state=open]:bg-visual flex h-full items-center gap-2 px-2 transition-colors duration-200 ease-linear">
        &copy; {new Date().getFullYear()} Tiesen
      </span>
    </button>
  )
}
