'use client'

import { useEffect, useRef, useState, useTransition } from 'react'

import { Button } from '@/components/ui/button'
import { sendEmail } from '@/lib/actions'
import { siteConfig } from '@/lib/site'

export const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState<{
    message?: string
    success: boolean
    error?: Record<string, string>
  }>({ message: '', success: false, error: {} })

  const send = (formData: FormData) =>
    startTransition(async () => {
      const res = await sendEmail(formData)
      setState(res)
      if (res.success) formRef.current?.reset()
    })

  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => setState({ ...state, success: false }), 2000)
      return () => clearTimeout(timer)
    }
  }, [state])

  return (
    <form className="md:mt-8" ref={formRef} action={send}>
      <div id="contact-form" className="space-y-4 px-0 pb-6">
        {fields.map((field) => (
          <fieldset className="space-y-2" key={field.name}>
            <input
              {...field}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <small className="text-destructive">{state.error?.[field.name]}</small>
          </fieldset>
        ))}

        <fieldset className="space-y-2">
          <textarea
            name="message"
            placeholder="Your message..."
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <small className="text-destructive">{state.error?.message}</small>
        </fieldset>
        <input type="hidden" name="to" value={siteConfig.contact[1]?.value} />
      </div>

      <div className="flex flex-col items-start gap-4 px-0 pb-6">
        {state.error && typeof state.error === 'string' && (
          <p className="text-destructive">{state.error}</p>
        )}
        <Button className="w-full" isLoading={isPending}>
          {state.success ? 'Email sent!' : 'Send Message'}
        </Button>
      </div>
    </form>
  )
}

const fields = [
  { name: 'reply_to', type: 'email', placeholder: 'yukikaze@gmail.com' },
  { name: 'subject', type: 'text', placeholder: "What's do you want to talk about?" },
]
