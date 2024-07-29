import * as icons from 'lucide-react'
import type { Metadata, Viewport } from 'next'

export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return window.location.origin
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const description =
  "I'm a weeb developer who loves to build many stuff. I enjoy working with TypeScript, Next.js, tRPC, and ElysiaJS. I'm also a fan of anime, manga, and light novels."

interface SiteConfig {
  meta: Metadata
  viewport: Viewport
  contact: { label: string; value: string; icon: icons.LucideIcon }[]
  socials: { label: string; href: string; icon: icons.LucideIcon }[]
  navLinks: { label: string; url: string }[]
}

export const siteConfig: SiteConfig = {
  meta: {
    metadataBase: new URL(getBaseUrl()),
    title: { default: 'Tiesen', template: '%s | Tiesen' },
    description,
    authors: { name: 'Tiesen', url: getBaseUrl() },
    creator: '@tiesen243',
    keywords: ['tiesen', 'tiesen243', 'tiesen 243', 'Trần Tiến', 'Tran Tien', 'portfolio', 'blog'],
    applicationName: 'Tiesen',
    openGraph: {
      type: 'profile',
      locale: 'vi_VN',
      url: getBaseUrl(),
      siteName: 'Tiesen',
      username: 'tiesen243',
      firstName: 'Tiến',
      lastName: 'Trần',
      emails: 'ttien56906@gmail.com',
    },

    twitter: { card: 'summary_large_image', creator: '@tiesen243' },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    alternates: { canonical: getBaseUrl() },
  },
  viewport: {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'hsl(0 0% 100%)' },
      { media: '(prefers-color-scheme: dark)', color: 'hsl(240 10% 3.9%)' },
    ],
    width: 'device-width',
    initialScale: 1,
    maximumScale: 6,
    userScalable: true,
  },

  contact: [
    { label: 'Phone', value: '+84 905 252 8844', icon: icons.PhoneIcon },
    { label: 'Email', value: 'ttien56906@gmail.com', icon: icons.MailIcon },
    { label: 'Address', value: 'Sai Gon, Vietnam', icon: icons.MapPinIcon },
  ],

  socials: [
    { label: 'Github', href: 'https://github.com/tiesen243', icon: icons.GithubIcon },
    {
      label: 'Linkedin',
      href: 'https://www.linkedin.com/in/tiesen243/',
      icon: icons.LinkedinIcon,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/tiesen243/',
      icon: icons.FacebookIcon,
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/tiesen243',
      icon: icons.TwitterIcon,
    },
    {
      label: 'Youtube',
      href: 'https://www.youtube.com/@tiesen243',
      icon: icons.YoutubeIcon,
    },
    {
      label: 'Other socials',
      href: 'https://gravatar.com/tiesen243',
      icon: icons.ListCollapseIcon,
    },
  ],

  navLinks: [
    { label: 'Home', url: '/#home' },
    { label: 'About', url: '/#about' },
    { label: 'Projects', url: '/projects' },
    { label: 'Blog', url: '/blog' },
  ],
}
