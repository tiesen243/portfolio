import type { Config } from 'tailwindcss'
import { createPreset } from 'fumadocs-ui/tailwind-plugin'
import animate from 'tailwindcss-animate'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './components/**/*.tsx',
    './app/**/*.tsx',
    './content/**/*.mdx',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset()],
  theme: {
    extend: {
      container: { center: true, padding: '2rem', screens: { '2xl': '1400px' } },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      animation: { shimmer: 'shimmer 2s linear infinite', updown: 'updown 1s linear infinite' },
      keyframes: {
        shimmer: { from: { backgroundPosition: '0 0' }, to: { backgroundPosition: '-200% 0' } },
        updown: {
          '0%, 100%': { transform: 'translateY(10%)' },
          '50%': { transform: 'translateY(-10%)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            code: { color: 'var(--kaze)', fontFamily: 'var(--font-geist-mono)' },
            a: { textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
          },
        },
      },
    },
  },
  plugins: [animate],
}
export default config
