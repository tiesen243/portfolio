'use server'

import { Resend } from 'resend'

import { env } from '@/env'

const resend = new Resend(env.RESEND_KEY)

export const sendEmail = async (formData: FormData) => {
  const data = Object.fromEntries(formData) as Record<string, string>

  const res = await resend.emails.send({
    from: 'Contact Form <no-reply@tiesen.id.vn>',
    to: 'ttien56906@gmail.com',
    replyTo: data.email,
    subject: String(data.subject ?? 'New Message from Contact Form'),
    text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
  })
  if (res.error) return { message: res.error.message }
  return { message: 'Message sent successfully' }
}
