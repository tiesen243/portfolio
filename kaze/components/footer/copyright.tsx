'use client'

import { useTheme } from '@yuki/ui'
import { useMounted } from '@yuki/ui/hooks/use-mounted'
import { NvimStatuslineSectionZ } from '@yuki/ui/nvim-statusline'

export function Copyright() {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const isMounted = useMounted()
  if (!isMounted)
    return (
      <NvimStatuslineSectionZ>
        tiesen243 &copy; {new Date().getFullYear()}
      </NvimStatuslineSectionZ>
    )

  return (
    <NvimStatuslineSectionZ className="cursor-pointer" onClick={toggleTheme}>
      tiesen243 &copy; {new Date().getFullYear()}
    </NvimStatuslineSectionZ>
  )
}
