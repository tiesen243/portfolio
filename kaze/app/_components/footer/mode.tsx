'use client'

import {
  NvimStatuslineSectionA,
  useNvimStatusline,
} from '@yuki/ui/nvim-statusline'
import { useSidebar } from '@yuki/ui/sidebar'
import { useEffect } from 'react'

export function Mode() {
  const { open, toggleSidebar } = useSidebar()
  const { setMode, mode } = useNvimStatusline()

  useEffect(() => {
    if (open) setMode('command')
    else setMode('normal')
    return () => {
      setMode('normal')
    }
  }, [open, setMode])

  return (
    <NvimStatuslineSectionA className='cursor-pointer' onClick={toggleSidebar}>
      {mode.toUpperCase()}

      <span className='sr-only'>Toggle Sidebar</span>
    </NvimStatuslineSectionA>
  )
}
