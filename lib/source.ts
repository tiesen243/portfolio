import { loader } from 'fumadocs-core/source'

import { blogs, projects } from '@/.source'

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const blogsSource = loader({
  baseUrl: '/blogs',
  source: blogs.toFumadocsSource(),
})

export const projectsSource = loader({
  baseUrl: '/projects',
  source: projects.toFumadocsSource(),
})
