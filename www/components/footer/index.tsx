import { GitBranchIcon, SectionSeparatorIcon } from '@yuki/ui/icons'

import Breadcrumb from './breadcrumb'

export function Footer() {
  return (
    <footer className="bg-secondary fixed bottom-4 left-0 inline-flex h-6 w-full items-center justify-between gap-0 px-4">
      <div className="flex h-full items-center">
        <div className="text-secondary inline-flex h-full items-center gap-0 font-bold">
          <span className="bg-normal flex h-full items-center gap-2 px-2">
            NORMAL
          </span>
          <SectionSeparatorIcon className="fill-normal md:bg-background size-6 rotate-90" />
        </div>

        <div className="text-normal hidden h-full items-center gap-0 font-bold md:inline-flex">
          <span className="bg-background flex h-full items-center gap-2 pr-2">
            <GitBranchIcon size={20} /> main
          </span>

          <SectionSeparatorIcon className="fill-background size-6 rotate-90" />
        </div>

        <Breadcrumb />
      </div>

      <div className="flex h-full items-center">
        <div className="text-normal hidden h-full items-center gap-0 font-bold md:inline-flex">
          <SectionSeparatorIcon className="fill-background size-6 rotate-270" />
          <span className="bg-background flex h-full items-center gap-2 pl-2">
            Yukikaze {'<4'}
          </span>
        </div>

        <div className="text-secondary inline-flex h-full items-center gap-0 font-bold">
          <SectionSeparatorIcon className="fill-normal md:bg-background size-6 rotate-270" />
          <span className="bg-normal flex h-full items-center gap-2 px-2">
            &copy; {new Date().getFullYear()} Tiesen
          </span>
        </div>
      </div>
    </footer>
  )
}
