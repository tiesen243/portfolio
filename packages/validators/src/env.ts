import { createEnv } from '@yuki/lib/create-env'
import * as z from 'zod/mini'

export const env = createEnv({
  shared: {
    NODE_ENV: z._default(
      z.enum(['development', 'production', 'test']),
      'development',
    ),
  },

  server: {
    RESEND_TOKEN: z.string(),
    GENIMI_TOKEN: z.string(),

    // Vercel environment variables
    VERCEL: z.optional(z.string()),
    VERCEL_ENV: z.optional(z.enum(['production', 'preview', 'development'])),
    VERCEL_URL: z.optional(z.string()),
    VERCEL_PROJECT_PRODUCTION_URL: z.optional(z.string()),

    NEXT_BUILD_OUTPUT: z.optional(z.literal('standalone')),
  },

  clientPrefix: 'NEXT_PUBLIC_',
  client: {
    NEXT_PUBLIC_APP_URL: z.optional(z.string()),
  },

  runtimeEnv: process.env,

  skipValidation:
    !!process.env.CI || process.env.npm_lifecycle_event === 'lint',
})
