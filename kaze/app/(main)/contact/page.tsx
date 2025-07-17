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

import { ContactForm } from '@/app/(main)/_components/contact-form'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Get in touch with me for inquiries or collaborations.',
  openGraph: { url: '/contact' },
})

export default function ContactPage() {
  return (
    <section className="container flex min-h-[calc(100svh-1.5rem)] flex-col items-center justify-center py-12">
      <h1 className="sr-only">Contact page</h1>

      <section className="mb-16 text-center">
        <Typography variant="h2">Get In Touch</Typography>
        <Typography className="text-muted-foreground mx-auto max-w-2xl text-xl">
          Have a question or want to work together? I&apos;d love to hear from
          you.
        </Typography>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <h2 className="sr-only">Contact Methods section</h2>

        <ContactForm />

        <section className="space-y-8">
          <h3 className="sr-only">Direct Contact Information section</h3>

          <section className="bg-card text-card-foreground rounded-xl border py-6 shadow-md">
            <h4 className="sr-only">Email and Location Details section</h4>

            <section className="px-6">
              <Typography variant="h5">Contact Information</Typography>
              <Typography className="text-muted-foreground">
                You can also reach me through these channels.
              </Typography>
            </section>

            <div className="mt-4 space-y-6 px-6">
              {contactInfo.map((info) => (
                <div key={info.href} className="flex items-center space-x-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <Typography className="font-medium">
                      {info.label}
                    </Typography>
                    {info.href === '#' ? (
                      <Typography className="text-muted-foreground">
                        {info.value}
                      </Typography>
                    ) : (
                      <Typography
                        component="a"
                        // @ts-expect-error - treated as a anchor tag
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </Typography>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-card text-card-foreground rounded-xl border py-6 shadow-md">
            <h4 className="sr-only">Social Media Links section</h4>

            <section className="px-6">
              <Typography variant="h5">Follow Me</Typography>
              <Typography className="text-muted-foreground">
                Connect with me on social media for updates and insights.
              </Typography>
            </section>

            <div className="grid grid-cols-2 gap-4 px-6 pt-6">
              {Object.entries(socials).map(([key, Icon]) => (
                <a
                  key={key}
                  href={`/contact/${key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-primary/50 hover:bg-muted/50 group flex items-center gap-4 rounded-lg border p-4 transition-colors duration-200"
                >
                  <Icon className="size-6" />
                  <span className="group-hover:text-primary font-medium">
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
