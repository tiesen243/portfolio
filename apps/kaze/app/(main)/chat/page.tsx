import { ChatContent } from '@/app/(main)/@modal/(.)chat/page.client'
import { createMetadata } from '@/lib/metadata'

const TITLE = 'Chat with AI'
const DESCRIPTION =
  'Engage in a dynamic conversation with our AI assistant. Whether you have questions, need assistance, or just want to chat, our AI is here to provide insightful and helpful responses in real-time.'

export default function ChatPage() {
  return (
    <main className='container flex min-h-[calc(100dvh-1.5rem)] flex-col items-center justify-center py-12'>
      <ChatContent />
    </main>
  )
}

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    images: `/api/og?title=${TITLE}&description=${DESCRIPTION}`,
    url: '/blogs',
  },
})
