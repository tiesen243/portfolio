'use client'

import { useEffect, useRef, useState, useTransition } from 'react'

import { Button } from '@/components/ui/button'
import { sendEmail } from '@/lib/actions'

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
      console.log(res)
      if (res.success) formRef.current?.reset()
    })

  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => setState({ ...state, success: false }), 2000)
      return () => clearTimeout(timer)
    }
  }, [state])

  return (
    <form className="space-y-4 px-0 pb-6 md:mt-8" ref={formRef} action={send}>
      {fields.map(({ mult, ...field }) => (
        <fieldset className="space-y-2" key={field.name}>
          {mult ? (
            <textarea
              {...field}
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          ) : (
            <input
              {...field}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          )}
          <small className="text-destructive">{state.error?.[field.name]}</small>
        </fieldset>
      ))}

      <Button className="w-full" disabled={isPending}>
        {isPending ? 'Sending...' : state.success ? 'Email sent!' : 'Send Message'}
      </Button>
    </form>
  )
}

const fields = [
  { name: 'reply_to', type: 'email', placeholder: 'yukikaze@gmail.com', mult: false },
  { name: 'subject', type: 'text', placeholder: "What's do you want to talk about?", mult: false },
  { name: 'message', type: 'text', placeholder: 'Write your message here...', mult: true },
]
