'use server'

import { basic } from '@yuki/data'
import type { ContactSchema } from '@yuki/validators/contact'
import { env } from '@yuki/validators/env'
import { Resend } from 'resend'

const resend = new Resend(env.RESEND_TOKEN)

export async function sendEmail(options: ContactSchema) {
  const { error } = await resend.emails.send({
    from: 'contact-form@tiesen.id.vn',
    to: basic.email,
    replyTo: options.email,
    subject: options.subject,
    text: options.message,
    html: /* HTML */ `
      <div
        style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;"
      >
        <h1>Contact Form</h1>
        <p><strong>Name:</strong> ${options.name}</p>
        <p><strong>Email:</strong> ${options.email}</p>
        <p><strong>Subject:</strong> ${options.subject}</p>
        <p><strong>Message:</strong></p>
        <div>${options.message}</div>
      </div>
    `,
  })

  if (error) throw new Error(error.message)
  return { message: 'Email sent successfully' }
}
