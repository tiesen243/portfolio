'use client'

import { SectionSeparatorIcon } from '@yuki/ui/icons'
import { useSidebar } from '@yuki/ui/sidebar'

export function Mode() {
  const { open, toggleSidebar } = useSidebar()

  return (
    <button
      data-slot="side-bar-toggle"
      onClick={toggleSidebar}
      className="text-secondary inline-flex h-full items-center gap-0 font-bold"
    >
      <span className="bg-normal group-data-[state=open]:bg-visual flex h-full items-center gap-2 px-2 transition-colors duration-200 ease-linear">
        {open ? 'VISUAL' : 'NORMAL'}
      </span>
      <SectionSeparatorIcon className="md:bg-background fill-normal group-data-[state=open]:fill-visual size-6 rotate-90 transition-colors duration-200 ease-linear" />
    </button>
  )
}
