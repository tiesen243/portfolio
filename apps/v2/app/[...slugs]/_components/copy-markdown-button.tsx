'use client'
import { CopyCheckIcon, CopyIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

export const CopyMarkdownButton: React.FC<{ content: string }> = ({
  content,
}) => {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch {
      // Noop
    }
  }

  return (
    <Button variant='outline' data-icon='inline-start' onClick={handleCopy}>
      {isCopied ? <CopyCheckIcon /> : <CopyIcon />}
      Copy Markdown
    </Button>
  )
}
