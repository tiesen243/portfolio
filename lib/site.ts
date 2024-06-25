import * as icons from 'lucide-react'
import type { Metadata, Viewport } from 'next'

export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://tiesen.id.vn' : 'http://localhost:3000'

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
    twitter: { card: 'summary_large_image', creator: '@tiesen243' },
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
    maximumScale: 6,
    userScalable: false,
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
    { label: 'Contact', url: '/#contact' },
    { label: 'Projects', url: '/projects' },
    { label: 'Blog', url: '/blog' },
  ],
}
