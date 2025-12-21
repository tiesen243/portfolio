import baseConfig from '@yuki/eslint-config/base'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  {
    ignores: ['dist/**'],
  },
  ...baseConfig,
)
