'use server'

import { Resend } from 'resend'
import { z } from 'zod'

import { env } from '@/env'

const resend = new Resend(env.RESEND_KEY)

const schema = z.object({
  email: z.string().email(),
  subject: z.string().min(4),
  message: z.string().min(10),
})

export type State = {
  success: boolean
  error?: Record<string, string[] | undefined>
}

export const sendEmail = async (formData: FormData): Promise<State> => {
  try {
    const { email, subject, message } = schema.parse(Object.fromEntries(formData))

    const { error } = await resend.emails.send({
      from: 'Contact Form <no-reply@tiesen.id.vn>',
      to: 'ttien56906@gmail.com',
      replyTo: email,
      subject,
      text: message,
    })

    if (error) throw new Error(error.message)

    return { success: true }
  } catch (error) {
    if (error instanceof z.ZodError) return { success: false, error: error.flatten().fieldErrors }
    return { success: false }
  }
}
