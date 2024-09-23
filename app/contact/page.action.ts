'use server'

import { Resend } from 'resend'
import { z } from 'zod'

import { env } from '@/env'

const resend = new Resend(env.RESEND_KEY)

const schema = z.object({
  name: z.string().min(1, "Name can't be empty"),
  email: z.string().email('Invalid email address'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const sendEmail = async (formData: FormData) => {
  const parsed = schema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { message: parsed.error.errors.at(0)?.message }

  const res = await resend.emails.send({
    from: 'Contact Form <no-reply@tiesen.id.vn>',
    to: 'ttien56906@gmail.com',
    replyTo: parsed.data.email,
    subject: String(parsed.data.subject ?? 'New Message from Contact Form'),
    text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\n${parsed.data.message}`,
  })
  if (res.error) return { message: res.error.message }
  return { message: 'Message sent successfully' }
}
