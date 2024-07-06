'use client'

import { useEffect, useState, useTransition } from 'react'

import { Button } from '@/components/ui/button'
import { sendEmail } from '@/lib/actions'
import { siteConfig } from '@/lib/site'
import { ContactInfo } from './contact-info'

export const CTASection: React.FC = () => {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState<{
    message?: string
    success: boolean
    error?: Record<string, string>
  }>({ message: '', success: false, error: {} })

  const send = (e: React.FormEvent<HTMLFormElement>) =>
    startTransition(async () => {
      const form = e.currentTarget
      e.preventDefault()
      const res = await sendEmail(new FormData(form))
      setState(res)
      if (res.success) form.reset()
    })

  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => setState({ ...state, success: false }), 2000)
      return () => clearTimeout(timer)
    }
  }, [state])

  return (
    <section id="cta" className="mt-12 w-screen bg-secondary">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-start py-6">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Get in Touch</h2>

          <p className="text-sm text-muted-foreground">
            I&apos;m always excited to connect with new people and discuss potential collaborations
            or projects. Feel free to reach out using the form below.
          </p>

          <ContactInfo />
        </div>

        <form className="md:mt-8" onSubmit={send}>
          <div id="contact-form" className="space-y-4 px-0 pb-6">
            {fields.map((field) => (
              <fieldset className="space-y-2" key={field.name}>
                <input
                  {...field}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <small className="text-red-500">{state.error?.[field.name]}</small>
              </fieldset>
            ))}

            <fieldset className="space-y-2">
              <textarea
                name="message"
                placeholder="Your message..."
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <small className="text-red-500">{state.error?.message}</small>
            </fieldset>
            <input type="hidden" name="to" value={siteConfig.contact[1]?.value} />
          </div>

          <div className="flex flex-col items-start gap-4 px-0 pb-6">
            {state.error && typeof state.error === 'string' && (
              <p className="text-destructive">{state.error}</p>
            )}
            <Button type="submit" className="w-full bg-yuki text-white" isLoading={isPending}>
              {state.success ? 'Email sent!' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

const fields = [
  { name: 'reply_to', type: 'email', placeholder: 'yukikaze@gmail.com' },
  { name: 'subject', type: 'text', placeholder: "What's do you want to talk about?" },
]
