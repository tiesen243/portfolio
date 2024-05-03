import {
  type LucideIcon,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  CoffeeIcon,
} from 'lucide-react'
import type { Metadata, Viewport } from 'next'

export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://tiesen.id.vn' : 'http://localhost:3000'

export const description =
  "I'm a weeb developer who loves to build things. I enjoy working with TypeScript, Next.js, and ElysiaJS. I'm also a fan of anime, manga, and light novels."

interface SiteConfig {
  meta: Metadata
  viewport: Viewport
  email: string
  socials: { label: string; href: string; icon: LucideIcon }[]
  navLinks: { label: string; url: string }[]
}

export const siteConfig: SiteConfig = {
  meta: {
    metadataBase: new URL(baseUrl),
    title: { default: 'Tiesen', template: '%s | Tiesen' },
    description,
    authors: { name: 'Tiesen', url: baseUrl },
    creator: '@tiesen243',
    keywords: ['tiesen', 'tiesen243', 'tiesen 243', 'Trần Tiến', 'Tran Tien', 'portfolio', 'blog'],
    applicationName: 'Tiesen',
    openGraph: {
      type: 'profile',
      locale: 'vi_VN',
      url: baseUrl,
      siteName: 'Tiesen',
      images: `/og?title=Welcome to my portfolio&desc=${description}`,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@tiesen243',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    alternates: { canonical: baseUrl },
  },
  viewport: {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'hsl(0 0% 100%)' },
      { media: '(prefers-color-scheme: dark)', color: 'hsl(240 10% 3.9%)' },
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  email: 'ttien56906@gmail.com',

  socials: [
    {
      label: 'Github',
      href: 'https://github.com/tiesen243',
      icon: GithubIcon,
    },
    {
      label: 'Linkedin',
      href: 'https://www.linkedin.com/in/tiesen243/',
      icon: LinkedinIcon,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/tiesen243/',
      icon: FacebookIcon,
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/tiesen243',
      icon: TwitterIcon,
    },
    {
      label: 'Youtube',
      href: 'https://www.youtube.com/@tiesen243',
      icon: YoutubeIcon,
    },
    {
      label: 'Support me',
      href: 'https://me.momo.vn/tiesen243',
      icon: CoffeeIcon,
    },
  ],

  navLinks: [
    {
      label: 'Home',
      url: '/#home',
    },
    {
      label: 'About',
      url: '/#about',
    },

    {
      label: 'Contact',
      url: '/#contact',
    },
    {
      label: 'Projects',
      url: '/projects',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
  ],
}
