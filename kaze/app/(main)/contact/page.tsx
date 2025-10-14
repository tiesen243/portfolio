import { basic } from '@yuki/data'
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  XFormerTwitterIcon,
} from '@yuki/ui/icons'
import { Typography } from '@yuki/ui/typography'

import { ContactForm } from '@/app/(main)/contact/page.client'
import { createMetadata } from '@/lib/metadata'

const TITILE = 'Contact'
const DESCRIPTION =
  'Get in touch with me for inquiries or collaborations. Whether you have a question, feedback, or just want to say hello, I’d love to hear from you!'

export const metadata = createMetadata({
  title: TITILE,
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
})

export default function ContactPage() {
  return (
    <section className='container flex min-h-[calc(100svh-1.5rem)] flex-col items-center justify-center py-12'>
      <h1 className='sr-only'>Contact page</h1>

      <section className='mb-16 text-center'>
        <Typography variant='h2'>Get In Touch</Typography>
        <Typography className='mx-auto max-w-2xl text-xl text-muted-foreground'>
          Have a question or want to work together? I&apos;d love to hear from
          you.
        </Typography>
      </section>

      <section className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-2'>
        <h2 className='sr-only'>Contact Methods section</h2>

        <ContactForm />

        <section className='space-y-8'>
          <h3 className='sr-only'>Direct Contact Information section</h3>

          <section className='rounded-xl border bg-card py-6 text-card-foreground shadow-md'>
            <h4 className='sr-only'>Email and Location Details section</h4>

            <section className='px-6'>
              <Typography variant='h5'>Contact Information</Typography>
              <Typography className='text-muted-foreground'>
                You can also reach me through these channels.
              </Typography>
            </section>

            <div className='mt-4 space-y-6 px-6'>
              {contactInfo.map((info) => (
                <div key={info.href} className='flex items-center space-x-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                    <info.icon className='h-6 w-6' />
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
                        component='a'
                        // @ts-expect-error - treated as a anchor tag
                        href={info.href}
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

          <section className='rounded-xl border bg-card py-6 text-card-foreground shadow-md'>
            <h4 className='sr-only'>Social Media Links section</h4>

            <section className='px-6'>
              <Typography variant='h5'>Follow Me</Typography>
              <Typography className='text-muted-foreground'>
                Connect with me on social media for updates and insights.
              </Typography>
            </section>

            <div className='grid grid-cols-2 gap-4 px-6 pt-6'>
              {Object.entries(socials).map(([key, Icon]) => (
                <a
                  key={key}
                  href={`/contact/${key}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-4 rounded-lg border p-4 transition-colors duration-200 hover:border-primary/50 hover:bg-muted/50'
                >
                  <Icon className='size-6' />
                  <span className='font-medium group-hover:text-primary'>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </section>
      </section>
    </section>
  )
}

const contactInfo = [
  {
    icon: MailIcon,
    label: 'Email',
    value: basic.email,
    href: `mailto:${basic.email}`,
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    value: basic.location,
    href: '#',
  },
]

const socials = {
  github: GithubIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  x: XFormerTwitterIcon,
}
