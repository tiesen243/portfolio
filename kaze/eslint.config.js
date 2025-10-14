import { defineConfig } from 'eslint/config'

import baseConfig, { restrictEnvAccess } from '@yuki/eslint-config/base'
import nextConfig from '@yuki/eslint-config/next'
import reactConfig from '@yuki/eslint-config/react'

export default defineConfig(
  {
    ignores: ['.next/**'],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextConfig,
  ...restrictEnvAccess,
)
