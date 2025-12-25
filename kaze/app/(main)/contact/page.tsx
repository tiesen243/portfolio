import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  XFormerTwitterIcon,
} from '@yuki/ui/icons'
import { Typography } from '@yuki/ui/typography'
import Link from 'next/link'

import { ContactForm } from '@/app/(main)/contact/page.client'
import { basic } from '@/lib/data'
import { createMetadata } from '@/lib/metadata'

const TITILE = 'Contact Me'
const DESCRIPTION =
  'Get in touch with me for inquiries or collaborations. Whether you have a question, feedback, or just want to say hello, I’d love to hear from you!'

export const metadata = createMetadata({
  description: DESCRIPTION,
  keywords: [
    'contact',
    'get in touch',
    'inquiries',
    'collaborations',
    'feedback',
  ],
  openGraph: {
    images: `/api/og?title=${TITILE}&description=${DESCRIPTION}`,
    url: '/contact',
  },
  title: TITILE,
})

export default function ContactPage() {
  return (
    <main className='container flex min-h-[calc(100dvh-1.5rem)] flex-col items-center justify-center py-12'>
      <Typography variant='h1'>Get In Touch</Typography>
      <Typography className='mb-12 max-w-2xl text-center text-lg text-muted-foreground'>
        {DESCRIPTION}
      </Typography>

      <section className='grid w-full gap-4 lg:grid-cols-2'>
        <h2 className='sr-only'>Contact Methods section</h2>

        <ContactForm />

        <section className='space-y-4'>
          <h3 className='sr-only'>Direct Contact Information section</h3>

          <section className='rounded-xl border bg-card p-4 text-card-foreground shadow-md'>
            <Typography variant='h5' render={<h4> Contact Information</h4>} />
            <Typography className='-mt-1 text-muted-foreground'>
              You can also reach me through these channels.
            </Typography>

            <div className='mt-4 space-y-4'>
              {contactInfo.map((info) => (
                <div key={info.href} className='flex items-center space-x-4'>
                  <div className='flex size-12 items-center justify-center rounded-lg border border-accent bg-accent/20 text-accent-foreground'>
                    <info.icon className='size-6' />
                  </div>
                  <div>
                    <Typography className='font-medium'>
                      {info.label}
                    </Typography>
                    {info.href === '#' ? (
                      <Typography className='text-muted-foreground'>
                        {info.value}
                      </Typography>
                    ) : (
                      <Typography
                        // oxlint-disable-next-line no-html-link-for-pages
                        render={<a href={info.href} />}
                        className='text-muted-foreground transition-colors hover:text-primary'
                      >
                        {info.value}
                      </Typography>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className='rounded-xl border bg-card p-4 text-card-foreground shadow-md'>
            <Typography variant='h5' render={<h4> Follow Me</h4>} />
            <Typography className='-mt-1 text-muted-foreground'>
              Connect with me on social media for updates and insights.
            </Typography>

            <div className='grid gap-4 pt-6 sm:grid-cols-2'>
              {Object.entries(socials).map(([key, Icon]) => (
                <Link
                  key={key}
                  href={`/contact/${key}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-4 rounded-lg border p-4 transition-colors hover:border-accent hover:bg-accent/20 hover:text-accent-foreground'
                >
                  <Icon className='size-6' />
                  <span className='font-medium'>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </section>
    </main>
  )
}

const contactInfo = [
  {
    href: `mailto:${basic.email}`,
    icon: MailIcon,
    label: 'Email',
    value: basic.email,
  },
  {
    href: '#',
    icon: MapPinIcon,
    label: 'Location',
    value: basic.location,
  },
]

const socials = {
  facebook: FacebookIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  'x (formerly Twitter)': XFormerTwitterIcon,
}
