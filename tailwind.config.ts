import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

import animate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

export default {
  darkMode: ['class'],
  content: ['./app/**/*.tsx', './components/**/*.tsx'],
  theme: {
    container: { center: true, padding: '2rem', screens: { '2xl': '1400px' } },
    extend: {
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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },

      keyframes: {
        marquee: { to: { transform: 'translateX(-50%)' } },
        'marquee-reverse': { to: { transform: 'translateX(-50%)' } },
        'up-down': {
          '0%, 100%': { transform: 'translateY(10%)' },
          '50%': { transform: 'translateY(-10%)' },
        },
        shimmer: { from: { backgroundPosition: '0 0' }, to: { backgroundPosition: '-200% 0' } },
      },
      animation: {
        marquee: 'marquee var(--duration, 30s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--duration, 30s) linear infinite reverse',
        'up-down': 'up-down 1s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },

      typography: {
        DEFAULT: {
          css: {
            figure: { margin: 0 },
            blockquote: {
              fontSize: '90%',
              'p::after': { display: 'none' },
              'p::before': { display: 'none' },
              color: 'hsl(var(--muted-foreground))',
              borderLeftColor: 'hsl(var(--border))',
            },
            code: {
              fontWeight: 'normal',
              color: 'hsl(var(--code))',
              '&::after': { content: `unset !important` },
              '&::before': { content: `unset !important` },
              fontFamily: ['var(--font-geist-mono)', ...fontFamily.mono],
            },
          },
        },
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config
