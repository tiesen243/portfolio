'use client'

import { SectionSeparatorIcon } from '@yuki/ui/icons'
import { useSidebar } from '@yuki/ui/sidebar'

export function Mode() {
  const { mode, toggleSidebar } = useSidebar()

  return (
    <button
      data-slot="side-bar-toggle"
      onClick={toggleSidebar}
      className="text-secondary inline-flex h-full items-center gap-0 font-bold"
    >
      <span className="group-data-[mode=normal]:bg-normal group-data-[mode=insert]:bg-insert group-data-[mode=visual]:bg-visual flex h-full items-center gap-2 px-2 transition-colors duration-200 ease-linear">
        {mode.toUpperCase()}
      </span>
      <SectionSeparatorIcon className="md:bg-background group-data-[mode=insert]:fill-insert group-data-[mode=normal]:fill-normal group-data-[mode=visual]:fill-visual size-6 rotate-90 transition-colors duration-200 ease-linear" />
    </button>
  )
}
