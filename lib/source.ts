import { createElement } from 'react'
import type { InferMetaType, InferPageType} from 'fumadocs-core/source';
import { loader } from 'fumadocs-core/source'
import { createMDXSource } from 'fumadocs-mdx'
import { icons } from 'lucide-react'

import { docs, meta } from '@/.source'

export const source = loader({
  baseUrl: '/blogs',
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (icon && icon in icons) return createElement(icons[icon as keyof typeof icons])
  },
})

export type Page = InferPageType<typeof source>
export type Meta = InferMetaType<typeof source>
