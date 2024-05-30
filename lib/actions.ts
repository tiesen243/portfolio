'use server'

import type { Project } from '@/components/project-card'

export const getProjects = async () => {
  const projects: Project[] = await fetch(process.env.PROJECTS_URL!, {
    headers: { authorization: process.env.GITHUB_TOKEN! },
    next: { revalidate: 60 * 60 },
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
  if (!process.env.EMAIL_API)
    return {
      success: false,
      message: 'Email API not set',
      error: {},
    }

  try {
    const inp = Object.fromEntries(formData)

    const res: {
      error?: Record<string, string>
      message?: string
    } = await fetch(process.env.EMAIL_API, {
      method: 'POST',
      body: JSON.stringify({
        from: 'Contact Form',
        to: inp.target,
        reply_to: inp.email,
        subject: inp.subject,
        message: inp.message,
      }),
    }).then((res) => res.json())

    if (res.error)
      return {
        success: false,
        message: '',
        error: res.error,
      }

    return {
      success: true,
      message: res.message,
      error: {},
    }
  } catch (e) {
    if (e instanceof Error) return { success: false, message: e.message, error: {} }
    else return { success: false, message: 'An error occurred', error: {} }
  }
}
