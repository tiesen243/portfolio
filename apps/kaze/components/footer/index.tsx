import { GitBranchIcon } from '@yuki/ui/icons'
import {
  NvimStatusline,
  NvimStatuslineSectionA,
  NvimStatuslineSectionB,
  NvimStatuslineSectionC,
  NvimStatuslineSectionY,
  NvimStatuslineSectionZ,
} from '@yuki/ui/nvim-statusline'

import { Breadcrumb } from '@/components/footer/breadcrumb'
import { Mode } from '@/components/footer/mode'

export function Footer() {
  return (
    <NvimStatusline className='[&_[data-slot=nvim-statusline-section-separator-1]]:bg-border md:[&_[data-slot=nvim-statusline-section-separator-1]]:bg-background'>
      <NvimStatuslineSectionA>
        <Mode />
      </NvimStatuslineSectionA>
      <NvimStatuslineSectionB className='hidden md:inline-flex'>
        <GitBranchIcon /> main
      </NvimStatuslineSectionB>

      <NvimStatuslineSectionC>
        <Breadcrumb />
      </NvimStatuslineSectionC>

      <NvimStatuslineSectionY className='hidden md:inline-flex'>
        Yukikaze {'<4'}
      </NvimStatuslineSectionY>

      <NvimStatuslineSectionZ>
        tiesen243 &copy; {new Date().getFullYear()}
      </NvimStatuslineSectionZ>
    </NvimStatusline>
  )
}
