'use client'

import { useEffect } from 'react'

import {
  NvimStatuslineSectionA,
  useNvimStatusline,
} from '@yuki/ui/nvim-statusline'
import { useSidebar } from '@yuki/ui/sidebar'

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
    </NvimStatuslineSectionA>
  )
}
