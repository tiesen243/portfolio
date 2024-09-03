import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { createClient } from 'next-sanity'

import { env } from '@/env'

export const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
})

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

export interface Post {
  _id: string
  _type: 'post'
  title: string
  publishedAt: string
  description: string
  categories: { _id: string; _ref: string; _type: 'reference'; title: string }[]
  slug: { current: string; _type: 'slug' }
  mainImage: { _type: 'image'; asset: { _ref: string; _type: 'reference' }; alt: string }
  body: string
  author: {
    _id: string
    _ref: string
    _type: 'reference'
    name: string
    image: { _type: 'image'; asset: { _ref: string; _type: 'reference' } }
  }
  _createdAt: string
}
