import { basic } from '@yuki/data'
import { MailIcon, MapPinIcon } from '@yuki/ui/icons'
import { Typography } from '@yuki/ui/typography'

import { createMetadata } from '@/lib/metadata'
import { ContactForm } from './page.client'

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
                    <info.icon className="text-primary h-6 w-6" />
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
                  href={`/${key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border hover:border-primary/50 hover:bg-muted/50 group flex items-center space-x-3 rounded-lg border p-4 transition-all duration-200"
                >
                  <Icon className="size-6 transition-colors dark:invert" />
                  <span className="group-hover:text-primary font-medium transition-colors">
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
  github: (props: React.ComponentProps<'svg'>) => (
    <svg
      {...props}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  linkedin: (props: React.ComponentProps<'svg'>) => (
    <svg
      {...props}
      data-slug="linkedin-icon"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.556v-5.569c0-1.327-.025-3.033-1.85-3.033-1.85 0-2.134 1.445-2.134 2.938v5.664H9.35V9h3.415v1.561h.049c.477-.9 1.64-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.45v6.291ZM5.337 7a2.07 2.07 0 1 1 .001-4.14A2.07 2.07 0 0 1 5.337 7Zm1.78 13.452H3.557V9h3.56v11.452Z" />
    </svg>
  ),
  x: (props: React.ComponentProps<'svg'>) => (
    <svg
      {...props}
      data-slug="x-icon"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  ),
  facebook: (props: React.ComponentProps<'svg'>) => (
    <svg
      {...props}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Facebook</title>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  ),
}
