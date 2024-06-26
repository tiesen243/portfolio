---
title: Next.js x Elysia Starter Kit
description: Create a full-stack application with Next.js and ElysiaJS in minutes
image: /imgs/blog/next-elysia.png
date: 2024-05-10
tags:
  - Next.js
  - Full Stack
---

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Backend](#backend)
4. [Fontend](#fontend)
5. [Reference](#reference)

## Introduction

Hello everynyan!
Today, we're diving into the world of full-stack web development using Next.js and Elysia.js, two powerful frameworks that streamline frontend and backend development, respectively.

## Installation

```bash
bun create next-app --example https://github.com/tiesen243/next-elysia [your-app-name]
cd [your-app-name]
```

Next step, update your enviroment variables

> If you want to add other variables, remember to add it to `env.mjs` to validate it

```bash title=".env"
DATABASE_URL=""
```

> In this project, i'm use MongoDB for Database, if you use other database, remember to change provider in `prisma/schema.prisma` and change Id fields

Then, push schema to your database

```bash
bun run db:format
bun run db:migrate
bun run db:push
```

Finaly, run your development server

```bash
bun dev
```

## Backend

Make your route model at `server/models/*.ts` and import to your route

Define your route at `server/routes/*.ts` and update this route to `server/elysia.ts`

> Note: in this example, i'm use `post` route

```ts title="server/models/post.model.ts"
import Elysia, { t } from 'elysia'

const createPost = t.Object({
  content: t.String({ minLength: 4, error: 'Content must be at least 4 characters' }),
})

const deletePost = t.Object({
  id: t.String({ minLength: 4, error: 'ID must be at least 4 characters' }),
})

export const postModel = new Elysia({ name: 'Model.Post' }).model({ createPost, deletePost })
```

Create your new route

```ts title="server/routes/post.route.ts"
import Elysia from 'elysia'

import { context } from '@/server/plugins'
import { postModel } from '@/server/models/post.model'

export const postRoute = new Elysia({ name: 'Route.Post', prefix: '/post' })
  .use(context)
  .use(postModel)

  .get('/getAll', async ({ db, error }) => {
    const posts = await db.post.findMany({
      include: { author: { select: { id: true, name: true } } },
      orderBy: { createdAt: 'desc' },
    })
    if (!posts) return error(404, { message: 'No posts found' })
    return posts
  })

  .onBeforeHandle({ as: 'scoped' }, ({ session, user, error }) => {
    if (!session || !user) return error(401, { message: 'Unauthorized' })
  })

  .post(
    '/create',
    async ({ db, body: { content }, user, error }) => {
      const newPost = await db.post.create({
        data: { content, author: { connect: { id: user?.id } } },
      })
      if (!newPost) return error(500, { message: 'Failed to create post' })
      return { message: 'Post created successfully' }
    },
    { body: 'createPost' },
  )

  .delete(
    '/del',
    async ({ db, body: { id }, error }) => {
      const post = await db.post.findUnique({ where: { id } })
      if (!post) return error(404, { message: 'Post not found' })
      await db.post.delete({ where: { id } })
      return { message: 'Post deleted successfully' }
    },
    { body: 'deletePost' },
  )
```

Add this route to app

```ts title="server/elysia.ts"
import { Elysia } from 'elysia'

import { postRoute } from '@/server/routes/post.route'

export const app = new Elysia({ prefix: '/api/elysia' })
  /* ... */
  .use(postRoute)
/* ... */
```

## Fontend

> In this example, i'm use `api.post` for post route

```tsx title="components/delete-post.tsx"
'use client'

import { XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'
import { revalidate } from '@/lib/revalidate'

export const DeletePost: React.FC<{ postId: string }> = ({ postId }) => {
  const handleClick = async () => {
    await api.post.del.delete({ id: postId })
    revalidate('posts')
  }
  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute right-2 top-2 z-10"
      onClick={handleClick}
    >
      <XIcon size={24} />
    </Button>
  )
}
```

```tsx title="components/post-list.tsx"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { api } from '@/lib/api'
import { DeletePost } from './delete-post'

export const PostList: React.FC<{ userId?: string }> = async ({ userId }) => {
  const { data, error } = await api.post.getAll.get({ fetch: { next: { tags: ['posts'] } } })

  if (error || !data) return <div>{error.value.message ?? 'Unknow error'}</div>

  return (
    <div className="container mb-4 max-w-screen-md space-y-4">
      {data.map((post) => (
        <Card key={post.id}>
          {userId === post.author.id && <DeletePost postId={post.id} />}
          <CardHeader>
            <CardDescription>{post.author.name}</CardDescription>
          </CardHeader>
          <CardFooter>
            <CardTitle>{post.content}</CardTitle>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
```

Create a form to create post

```tsx title="components/create-post.tsx"
'use client'

import { useRef, useTransition } from 'react'
import { toast } from 'sonner'
import { SendHorizonalIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import { api } from '@/lib/api'
import { revalidate } from '@/lib/revalidate'

export const CreatePost: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isPending, startTransition] = useTransition()
  const action = (fd: FormData) =>
    startTransition(async () => {
      const { error } = await api.post.create.post({ content: String(fd.get('content')) })
      if (error) toast.error(error.value.message ?? 'Unknow error')
      else revalidate('posts')
      formRef.current?.reset()
    })
  return (
    <form
      ref={formRef}
      action={action}
      className="container mb-4 flex max-w-screen-md items-center gap-4"
    >
      <FormField name="content" placeholder="What's on your mind?" className="w-full" />
      <Button variant="ghost" size="icon" isLoading={isPending}>
        <SendHorizonalIcon />
      </Button>
    </form>
  )
}
```

And, use it in your page

```tsx title="app/page.tsx"
import type { NextPage } from 'next'

import { auth } from '@/server/auth'
import { PostList } from '@/components/post-list'
import { CreatePost } from '@/components/create-post'

const Page: NextPage = async () => {
  const session = await auth()

  return (
    <main className="container">
      {session && session.user && <CreatePost />}
      <PostList userId={session.user?.id} />
    </main>
  )
}
```

## Notes:

If you want to use `middleware`:

```ts title="app/page.tsx"
import type { NextPage } from 'next'
import { redirect } from 'next/navigation'

import { auth } from '@/server/auth'

const Page: NextPage = async () => {
  const session = await auth()
  if (!session && !session.user) redirect('/login')

  return (
    <main className="container">
      Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
    </main>
  )
}
```

## Reference

### Documents

- Next.js: [nextjs.org](https://nextjs.org/)
- ElysiaJS: [elysiajs.com](https://elysiajs.com/)

### Try it now!!!

1. Fork my repository: [here](https://github.com/tiesen243/next-elysia/)
2. Demo web app: [here](https://next-elysia.vercel.app/)

<div align="center">
  <b>Thanks for reading, hope you like this</b>
</div>
