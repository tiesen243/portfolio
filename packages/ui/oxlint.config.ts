import core from '@yuki/oxlint/core'
import react from '@yuki/oxlint/react'
import { defineConfig } from 'oxlint'

export default defineConfig({
  extends: [core, react],
})
