'use client'

import { ClipboardIcon, ClipboardCheckIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

export const CodeBlock = (props: React.HTMLProps<HTMLElement>) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // copy content of the figure to clipboard
    try {
      const text = e.currentTarget.parentElement?.textContent
      if (text) await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch {
      setIsCopied(false)
    }
  }
  return (
    <figure {...props} className="relative">
      <Button
        className="copy absolute right-0 top-0 z-10"
        size="icon"
        variant="ghost"
        onClick={handleClick}
      >
        {isCopied ? <ClipboardCheckIcon /> : <ClipboardIcon />}
      </Button>

      {props.children}
    </figure>
  )
}
