import { GitBranchIcon } from '@yuki/ui/icons'
import {
  NvimStatusline,
  NvimStatuslineSectionB,
  NvimStatuslineSectionC,
  NvimStatuslineSectionY,
  NvimStatuslineSectionZ,
} from '@yuki/ui/nvim-statusline'

import { Breadcrumb } from './breadcrumb'
import { Mode } from './mode'

export function Footer() {
  return (
    <NvimStatusline>
      <Mode />
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
