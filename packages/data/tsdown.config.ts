import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  external: ['react', 'react/jsx-runtime'],
  dts: true,
  shims: true,
  exports: true,
})
