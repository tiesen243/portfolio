import * as z from 'zod'

import { createEnv } from '@/lib/create-env'

export const env = createEnv({
  shared: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
  },

  server: {
    APP_URL: z.string().optional(),
    RESEND_TOKEN: z.string(),
  },

  clientPrefix: 'NEXT_PUBLIC_',
  client: {},

  runtimeEnv: process.env,
})
