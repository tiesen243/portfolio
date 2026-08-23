'use server'

import data from '@/public/assets/data.json' assert { type: 'json' }

const [email] = data.contact

export async function sendEmail(opts: {
  name: string
  email: string
  message: string
}) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Contact Form <form@tiesen.id.vn>',
      to: email?.text,
      reply_to: opts.email,
      subject: 'Contact Form',
      html: /* HTML */ `
        <p><strong>Name:</strong> ${opts.name}</p>
        <p><strong>Email:</strong> ${opts.email}</p>
        <p>
          <strong>Message:</strong><br />
          ${opts.message}
        </p>
      `,
    }),
  })

  console.log('Email sent:', response.ok, await response.json())

  return response.ok
}
