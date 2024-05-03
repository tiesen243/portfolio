'use client'

import { useFormStatus } from 'react-dom'
import { useState } from 'react'

import * as card from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site'

export const ContactForm: React.FC = () => {
  const [error, setError] = useState<Record<string, string>>({})
  const [message, setMessage] = useState<string | undefined>('')

  const send = async (formData: FormData) => {
    setError({})
    setMessage(undefined)
    try {
      const data = Object.fromEntries(formData)

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const res: {
        error?: Record<string, string>
        message?: string
      } = await fetch(process.env.NEXT_PUBLIC_SEND_EMAIL!, {
        method: 'POST',
        body: JSON.stringify({
          from: 'Contact Form',
          to: siteConfig.email,
          reply_to: data.email,
          subject: data.subject,
          message: data.message,
        }),
      }).then((res) => res.json())

      if (res.error)
        Object.entries(res.error).forEach(([key, value]) => {
          setError((prev) => ({ ...prev, [key]: value }))
        })
      else {
        setError({})
        setMessage(res.message)
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error instanceof Error) setError({ error: error.message })
    }
  }

  return (
    <card.Card className="grid grid-cols-1 border md:grid-cols-2">
      <card.CardHeader className="flex-col items-start">
        <card.CardTitle className="text-2xl font-bold">
          Let&apos;s work together! <span className="text-primary">👋</span>
        </card.CardTitle>

        <card.CardDescription className="mt-8">
          I&apos;m currently open to new opportunities, my inbox is always open. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to you!
        </card.CardDescription>
      </card.CardHeader>

      <form className="mt-8" action={send}>
        <card.CardContent id="contact-form" className="space-y-4">
          <div>
            <Input name="subject" placeholder="Subject" />
            <span className="text-destructive">{error.subject}</span>
          </div>

          <div>
            <Input name="email" type="email" placeholder="Email" />
            <span className="text-destructive">{error.email}</span>
          </div>

          <div>
            <Textarea name="message" placeholder="Message" />
            <span className="text-destructive">{error.message}</span>
          </div>
        </card.CardContent>

        <card.CardFooter className="flex-col items-start gap-2">
          {message && <p>{message}</p>}
          {error.error && <p className="text-destructive">{error.error}</p>}

          <SubmitButton />
        </card.CardFooter>
      </form>
    </card.Card>
  )
}

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className="w-full" isLoading={pending}>
      Send
    </Button>
  )
}
