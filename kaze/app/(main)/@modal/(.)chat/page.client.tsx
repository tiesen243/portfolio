'use client'

import { useChat, fetchServerSentEvents } from '@tanstack/ai-react'
import { Button } from '@yuki/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@yuki/ui/card'
import { SendIcon, XIcon } from '@yuki/ui/icons'
import { Input } from '@yuki/ui/input'
import { toast } from '@yuki/ui/toast'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <Card
      render={<section />}
      className='fixed right-4 bottom-8 w-[calc(100%-2rem)] md:bottom-12 md:w-96'
    >
      <CardHeader className='border-b'>
        <CardTitle>Chat with AI</CardTitle>
        <CardAction>
          <Button
            variant='outline'
            size='icon-sm'
            onClick={() => router.back()}
          >
            <XIcon />
          </Button>
        </CardAction>
      </CardHeader>

      {children}
    </Card>
  )
}

export function ChatContent() {
  const [input, setInput] = useState('')

  const { messages, sendMessage, isLoading } = useChat({
    connection: fetchServerSentEvents('/api/ai'),
    onError(error) {
      toast.add({
        title: 'Error',
        description:
          error instanceof Error ? error.message : 'An error occurred',
        type: 'error',
      })
    },
  })

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      sendMessage(input)
      setInput('')
    }
  }

  return (
    <>
      <CardContent className='max-h-125 w-full overflow-y-auto p-4'>
        {messages.map((message) => (
          <div key={message.id} className='mb-4'>
            <div
              className={`mb-1 font-semibold ${message.role === 'assistant' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {message.role === 'assistant' ? 'Tiesen' : 'You'}
            </div>

            <ul>
              {message.parts.map((part, idx) => {
                if (part.type === 'text')
                  // oxlint-disable-next-line no-array-index-key
                  return <li key={idx}>{part.content}</li>
                return null
              })}
            </ul>
          </div>
        ))}
      </CardContent>

      <CardFooter
        render={<form />}
        onSubmit={handleSubmit}
        className='w-full gap-2 border-t'
      >
        <Input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Type a message...'
          disabled={isLoading}
        />
        <Button
          type='submit'
          variant='outline'
          disabled={!input.trim() || isLoading}
        >
          <SendIcon />
        </Button>
      </CardFooter>
    </>
  )
}
