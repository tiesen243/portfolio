import baseConfig from '@yuki/eslint-config/base'
import reactConfig from '@yuki/eslint-config/react'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  {
    ignores: ['dist/**'],
  },
  ...baseConfig,
  ...reactConfig,
)
