import { createPreset } from 'fumadocs-ui/tailwind-plugin'
import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    './app/**/*.tsx',
    './components/**/*.tsx',
    './content/**/*.{md,mdx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset({ preset: 'neutral', addGlobalColors: true })],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      colors: {
        yuki: 'hsl(var(--yuki))',
      },
    },
    animation: { shimmer: 'shimmer 2s linear infinite' },
    keyframes: {
      shimmer: {
        from: { backgroundPosition: '0 0' },
        to: { backgroundPosition: '-200% 0' },
      },
    },
  },
  plugins: [],
} satisfies Config
