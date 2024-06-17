'use server'

import type { Project } from '@/components/project-card'
import { env } from '@/env'

export const getProjects = async () => {
  const projects: Project[] = await fetch(env.PROJECT_URL, {
    headers: { authorization: env.GITHUB_TOKEN },
    next: { revalidate: 1 },
  })
    .then((res) => res.json())
    .then((p: Project[]) => p.filter((p) => p.topics.includes('showcase')))
    .then((p) =>
      p.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()),
    )
    .catch((_e) => [])

  return projects
}

export const sendEmail = async (formData: FormData) => {
  try {
    const res = await fetch(`${env.API_URL}/send-mail`, {
      method: 'POST',
      body: JSON.stringify({
        ...Object.fromEntries(formData),
        from: 'Contact Form',
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
