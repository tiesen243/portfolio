'use client'

import { cn } from '@/lib/utils'
import { CheckCheck, Copy } from 'lucide-react'
import { useRef, useState } from 'react'

export type CodeblockProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  /** set by `rehype-pretty-code` */
  'data-language'?: string
  /** set by `rehype-pretty-code` */
  'data-theme'?: string
}

export function Codeblock(props: CodeblockProps) {
  const { children, ...rest } = props
  const theme = props['data-theme'] as string

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
        className="absolute right-2 top-[10px] z-20 h-8 w-8 cursor-pointer rounded text-muted-foreground hover:bg-muted"
      >
        <div className="relative h-full w-full p-1">
          <Copy className={cn('absolute h-6 w-6 p-0 transition-all', copied && 'scale-0')} />
          <CheckCheck
            className={cn('absolute h-6 w-6 scale-0 p-0 transition-all', copied && 'scale-100')}
          />
        </div>
      </button>
      <pre
        ref={ref}
        className="relative my-4 overflow-x-auto rounded-lg border bg-muted p-4 font-mono text-sm font-semibold text-muted-foreground [&>*]:bg-transparent"
        {...rest}
      >
        {children}
      </pre>
    </>
  )
}
