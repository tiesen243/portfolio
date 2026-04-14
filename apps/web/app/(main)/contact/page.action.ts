'use server'

import { Resend } from 'resend'

import type { ContactSchema } from '@/app/(main)/contact/page.lib'

import { env } from '@/env'
import basic from '@/lib/data/basic'

const resend = new Resend(env.RESEND_TOKEN)

export async function sendMessage(data: ContactSchema) {
  const res = await resend.emails.send({
    from: `Contact From <${basic.email}>`,
    to: basic.email,
    replyTo: data.email,
    subject: `New Contact Message: ${data.subject}`,
    text: data.message,
    html: /* HTML */ `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p>strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <div>${data.message}</div>
      </div>
    `,
  })

  if (res.error) throw new Error(res.error.message ?? 'Failed to send message')
  return { message: 'Message sent successfully' }
}
