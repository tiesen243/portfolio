'use server'

import { Resend } from 'resend'

import { basic } from '@yuki/data'
import { env } from '@yuki/validators/env'

const resend = new Resend(env.RESEND_TOKEN)

export async function sendEmail(options: {
  name: string
  email: string
  subject: string
  message: string
}) {
  const { error } = await resend.emails.send({
    from: 'contact-form@tiesen.id.vn',
    to: basic.email,
    replyTo: options.email,
    subject: options.subject,
    text: options.message,
    react: (
      <div>
        <h1>Contact Form</h1>
        <p>
          <strong>Name:</strong> {options.name}
        </p>
        <p>
          <strong>Email:</strong> {options.email}
        </p>
        <p>
          <strong>Subject:</strong> {options.subject}
        </p>
        <p>
          <strong>Message:</strong>
        </p>
        <div>{options.message}</div>
      </div>
    ),
  })

  if (error) console.error('Resend error:', error)
}
