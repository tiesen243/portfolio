import { loader } from 'fumadocs-core/source'

import { docs } from '@/.source'

export const source = loader({
  baseUrl: '/blogs',
  source: docs.toFumadocsSource(),
})
