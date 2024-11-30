import { Card, Cards } from 'fumadocs-ui/components/card'
import * as icons from 'lucide-react'

import { seo } from '@/lib/seo'
import { ContactForm } from './_form'

export default () => (
  <main className="container flex-1 py-4">
    <h1 className="mb-8 text-center text-4xl font-bold">Contact Me</h1>

    <div className="grid gap-8 md:grid-cols-3">
      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm md:col-span-2">
        <h2 className="mb-4 text-2xl font-semibold">Send a Message</h2>
        <ContactForm />
      </div>

      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold">Contact Information</h2>
        <div className="space-y-8">
          <div className="flex items-center">
            <icons.MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
            <span>Sai Gon, Vietnam, 700000</span>
          </div>

          <div className="flex items-center">
            <icons.Mail className="mr-2 h-5 w-5 text-muted-foreground" />
            <span>ttien56906@gmail.com</span>
          </div>

          <Cards>
            {socials.map((social) => (
              <Card
                key={social.href}
                title={social.label}
                href={social.href}
                icon={<social.icon />}
              />
            ))}
          </Cards>
        </div>
      </div>
    </div>
  </main>
)

export const metadata = seo({
  title: 'Contact',
  description:
    'Contact me for more information or partnership. I will get back to you as soon as possible.',
  images: [
    '/api/og?title=Contact&description=Contact%20me%20for%20more%20information%20or%20partnership.%20I%20will%20get%20back%20to%20you%20as%20soon%20as%20possible.',
  ],
  url: '/contact',
})

const socials = [
  {
    label: 'Github',
    href: 'https://github.com/tiesen243',
    icon: icons.GithubIcon,
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/tiesen243/',
    icon: icons.LinkedinIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/tiesen243.tsx/',
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
    label: 'Gravatar',
    href: 'https://gravatar.com/tiesen243',
    icon: icons.ListCollapseIcon,
  },
]
