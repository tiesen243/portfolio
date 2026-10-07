import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/components/*.tsx', './src/hooks/*.ts', './src/lib/*.ts'],
  copy: ['./src/tailwind.css'],
  dts: { generator: 'tsgo' },
  shims: true,
  minify: true,
})
