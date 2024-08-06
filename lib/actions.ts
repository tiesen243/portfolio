'use server'

import { env } from '@/env'
import { siteConfig } from './site'

export const sendEmail = async (formData: FormData) => {
  try {
    const res = await fetch(`${env.API_URL}/send-mail`, {
      method: 'POST',
      body: JSON.stringify({
        ...Object.fromEntries(formData),
        from: 'Contact Form',
        to: siteConfig.contact[1]?.value,
        api_key: env.API_KEY,
      }),
    }).then((res) => res.json() as { error?: Record<string, string>; message?: string })

    if (res.error) return { success: false, message: '', error: res.error }

    return { success: true, message: res.message, error: {} }
  } catch (e) {
    if (e instanceof Error) return { success: false, message: e.message, error: {} }
    else return { success: false, message: 'An error occurred', error: {} }
  }
}

export const getViews = async (slug: string) => {
  const views = await fetch(`${env.API_URL}/view-count/${slug}?theme=no`, { cache: 'no-store' })
    .then((res) => res.text())
    .catch((_e) => '0')

  return views
}
