import { ChatContent } from '@/app/(main)/@modal/(.)chat/page.client'

export default function ChatPage() {
  return (
    <main className='container flex min-h-[calc(100dvh-1.5rem)] flex-col items-center justify-center py-12'>
      <ChatContent />
    </main>
  )
}
