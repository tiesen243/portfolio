'use client'

import { cn } from '@/lib/utils'
import { CheckCheck, Copy } from 'lucide-react'
import { useRef, useState } from 'react'

export type CodeblockProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  'data-language'?: string
  'data-theme'?: string
}

export function Codeblock(props: CodeblockProps) {
  const { children, ...rest } = props
  const theme = props['data-theme'] ?? 'dracula'

  const ref = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    if (typeof window === 'undefined' || !ref.current) return
    setCopied(true)
    void window.navigator.clipboard.writeText(ref.current.innerText)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <>
      <button
        aria-label="Copy to Clipboard"
        data-theme={theme}
        onClick={copyToClipboard}
        className="absolute right-2 top-2 z-20 h-8 w-8 cursor-pointer text-white"
      >
        <div className="relative h-full w-full p-1">
          <Copy className={cn('absolute h-6 w-6 p-0 transition-all', copied && 'scale-0')} />
          <CheckCheck
            className={cn('absolute h-6 w-6 scale-0 p-0 transition-all', copied && 'scale-100')}
          />
        </div>
      </button>
      <pre ref={ref} className="overflow-x-auto rounded-lg p-4" {...rest}>
        {children}
      </pre>
    </>
  )
}
