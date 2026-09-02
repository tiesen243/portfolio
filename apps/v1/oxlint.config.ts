import core from '@yuki/oxlint/core'
import next from '@yuki/oxlint/next'
import react from '@yuki/oxlint/react'
import { defineConfig } from 'oxlint'

export default defineConfig({
  extends: [core, react, next],
})
