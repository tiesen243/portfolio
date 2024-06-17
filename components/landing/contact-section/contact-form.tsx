'use client'

import { useEffect, useState, useTransition } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { sendEmail } from '@/lib/actions'
import { siteConfig } from '@/lib/site'

export const ContactForm: React.FC = () => {
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
    <Card className="grid grid-cols-1 border md:grid-cols-2">
      <CardHeader className="flex-col items-start">
        <CardTitle className="text-2xl font-bold">
          Let&apos;s work together! <span className="text-primary">👋</span>
        </CardTitle>

        <CardDescription className="mt-8">
          I&apos;m currently open to new opportunities, my inbox is always open. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to you!
        </CardDescription>

        <ul className="flex flex-col gap-2">
          {siteConfig.contact.map((c) => (
            <li key={c.label} className="flex items-center gap-2">
              <div className="aspect-square rounded bg-secondary p-2">
                <c.icon className="text-[var(--to)]" />
              </div>

              <div>
                <h3 className="font-medium">{c.label}</h3>
                <p className="text-muted-foreground">{c.value}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardHeader>

      <form className="mt-8" onSubmit={send}>
        <CardContent id="contact-form" className="space-y-4">
          <div>
            <input
              name="email"
              type="email"
              placeholder="yuki@gmail.com"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <span className="text-destructive">{state.error?.reply_to}</span>
          </div>

          <div>
            <input
              name="subject"
              placeholder="What's do you want to talk about?"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <span className="text-destructive">{state.error?.subject}</span>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Write your message here..."
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <span className="text-destructive">{state.error?.message}</span>
          </div>

          <input type="hidden" name="target" value={siteConfig.email} />
        </CardContent>

        <CardFooter className="flex-col items-start gap-4">
          {state.error && typeof state.error === 'string' && (
            <p className="text-destructive">{state.error}</p>
          )}
          <Button type="submit" className="w-full" isLoading={isPending}>
            {state.success ? 'Email sent!' : 'Send Message'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
