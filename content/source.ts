import type { InferMetaType, InferPageType } from 'fumadocs-core/source'
import { loader } from 'fumadocs-core/source'
import { createMDXSource } from 'fumadocs-mdx'

import { docs, meta } from '@/.source'

export const source = loader({
  baseUrl: '/blogs',
  source: createMDXSource(docs, meta),
})

export type Page = InferPageType<typeof source>
export type Meta = InferMetaType<typeof source>
