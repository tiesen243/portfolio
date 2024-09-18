'use client'

import { useTransition } from 'react'

import { Button } from '@/components/ui/button'
import { sendEmail } from './page.action'

export const ContactForm: React.FC = () => {
  const [isPending, startTransition] = useTransition()

  const action = (formData: FormData) =>
    startTransition(() => sendEmail(formData).then((res) => alert(res.message)))

  return (
    <form action={action} className="space-y-6">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <label htmlFor={field.name} className="block text-sm font-medium">
            {field.label}
          </label>
          <input
            {...field}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isPending}
            required
          />
        </div>
      ))}

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Write your message here..."
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isPending}
          required
        />
      </div>

      <Button className="w-full" disabled={isPending}>
        {isPending ? 'Message Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Yuki' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'yuki@example.com' },
  {
    name: 'subject',
    label: 'Subject',
    type: 'text',
    placeholder: 'What do you want to talk about?',
  },
]
