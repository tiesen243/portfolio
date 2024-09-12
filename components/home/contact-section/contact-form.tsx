'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState, useTransition } from 'react'

import { sendEmail, type State } from '@/lib/send-email'

const Button = dynamic(() => import('@/components/ui/button').then((mod) => mod.Button))

export const ContactForm: React.FC = () => {
  const [isPending, startTransition] = useTransition()
  const [formState, setFormState] = useState<State>({ success: false, error: {} })

  const action = (formData: FormData) =>
    startTransition(async () => {
      const state = await sendEmail(formData)
      setFormState(state)
    })

  useEffect(() => {
    if (formState.success) {
      const timer = setTimeout(() => setFormState({ success: false }), 2000)
      return () => clearTimeout(timer)
    }
  }, [formState.success])

  return (
    <form className="flex flex-col gap-4 px-0 pb-6 md:mt-8" action={action}>
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
          <small className="text-destructive">{formState.error?.[field.name]}</small>
        </fieldset>
      ))}

      <Button disabled={isPending}>
        {isPending ? 'Sending...' : formState.success ? 'Message Sent' : 'Send Message'}
      </Button>
    </form>
  )
}

const fields = [
  { name: 'email', type: 'email', placeholder: 'yukikaze@gmail.com', mult: false },
  { name: 'subject', type: 'text', placeholder: "What's do you want to talk about?", mult: false },
  { name: 'message', type: 'text', placeholder: 'Write your message here...', mult: true },
]
