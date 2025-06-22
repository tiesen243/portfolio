import { GitBranchIcon, SectionSeparatorIcon } from '@yuki/ui/icons'

import { Breadcrumb } from './breadcrumb'
import { Copyright } from './copyright'
import { Mode } from './mode'

export function Footer() {
  return (
    <footer className="bg-secondary sticky bottom-0 left-0 z-40 inline-flex h-6 w-full items-center justify-between gap-0 px-4 md:bottom-4">
      <div className="flex h-full items-center">
        <Mode />

        <div className="hidden h-full items-center gap-0 md:inline-flex">
          <span className="bg-background group-data-[mode=visual]:text-visual group-data-[mode=insert]:text-insert group-data-[mode=normal]:text-normal flex h-full items-center gap-2 pr-2 font-bold transition-colors duration-200 ease-linear">
            <GitBranchIcon size={20} /> main
          </span>
          <SectionSeparatorIcon className="fill-background size-6 rotate-90" />
        </div>
      </div>

      <Breadcrumb />

      <div className="flex h-full items-center">
        <div className="hidden h-full items-center gap-0 md:inline-flex">
          <SectionSeparatorIcon className="fill-background size-6 rotate-270" />
          <span className="bg-background group-data-[mode=insert]:text-insert group-data-[mode=normal]:text-normal group-data-[mode=visual]:text-visual flex h-full items-center gap-2 pl-2 font-bold whitespace-nowrap transition-colors duration-200 ease-linear">
            Yukikaze {'<4'}
          </span>
        </div>

        <Copyright />
      </div>
    </footer>
  )
}
