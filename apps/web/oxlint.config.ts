import core from '@yuki/oxc/core'
import next from '@yuki/oxc/next'
import react from '@yuki/oxc/react'
import { defineConfig } from 'oxlint'

export default defineConfig({
  extends: [core, react, next],
  rules: {
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/heading-has-content': 'off',
  },
})
