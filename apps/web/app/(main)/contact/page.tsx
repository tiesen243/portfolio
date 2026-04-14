import { ContactForm } from '@/app/(main)/contact/_components/contact-form'
import { ContactInfo } from '@/app/(main)/contact/_components/contact-info'
import { Typography } from '@/components/ui/typography'
import { createMetadata } from '@/lib/metadata'

const DESCRIPTION =
  'Get in touch with me for inquiries or collaborations. Whether you have a question, feedback, or just want to say hello, I’d love to hear from you!'

export default function ContactPage() {
  return (
    <main className='container py-8 md:py-16'>
      <Typography variant='h1' className='text-center'>
        Get in Touch
      </Typography>
      <Typography className='mx-auto max-w-xl text-center text-muted-foreground'>
        {DESCRIPTION}
      </Typography>

      <section className='mt-8 grid w-full gap-4 md:grid-cols-2'>
        <h2 className='sr-only'>Contact Form and Information section</h2>

        <ContactForm />
        <ContactInfo />
      </section>
    </main>
  )
}

export const metadata = createMetadata({
  title: 'Contact',
  description: DESCRIPTION,
  openGraph: {
    url: '/contact',
    images: [`/api/og?title=Contact&description=${DESCRIPTION}`],
  },
})
