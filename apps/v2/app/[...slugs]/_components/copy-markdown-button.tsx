'use client'

import { Button } from '@yuki/ui/components/button'
import { CopyCheckIcon, CopyIcon } from '@yuki/ui/components/icons'
import { useState } from 'react'

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
