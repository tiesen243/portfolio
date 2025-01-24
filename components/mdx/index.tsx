import type { MDXComponents } from 'mdx/types'
import type { ImageProps } from 'next/image'
import type { LinkProps } from 'next/link'
import Image from 'next/image'
import Link from 'next/link'

import type { CodeBlockProps } from '@/components/mdx/codeblock'
import * as code from '@/components/mdx/codeblock'
import { Tab, Tabs } from '@/components/mdx/tabs'
import { cn } from '@/lib/utils'

export const mdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1
      {...props}
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      id={getId(props.children)}
    />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2
      {...props}
      className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      id={getId(props.children)}
    />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3
      {...props}
      className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      id={getId(props.children)}
    />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p {...props} className="leading-7 [&:not(:first-child)]:mt-6" />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote {...props} className="mt-6 border-l-2 pl-6 italic" />
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul {...props} className="my-6 ml-6 list-disc [&>li]:mt-2" />
  ),
  ol: (props: React.HTMLProps<HTMLOListElement>) => (
    <ol {...props} type="1" className="my-6 ml-6 list-decimal [&>li]:mt-2" />
  ),
  pre: (props: CodeBlockProps) => (
    <code.CodeBlock {...props}>
      <code.Pre>{props.children}</code.Pre>
    </code.CodeBlock>
  ),
  code: (props: React.HTMLProps<HTMLElement>) => (
    <code {...props} className="bg-accent text-yuki rounded-md font-mono" />
  ),
  img: (props: React.HTMLProps<HTMLImageElement>) => (
    <Image
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
      {...(props as ImageProps)}
      className={cn('rounded-lg', props.className)}
      width={1920}
      height={1080}
    />
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => (
    <Link {...(props as LinkProps)} className={cn('hover:underline', props.className)} />
  ),
  table: (props: React.HTMLProps<HTMLTableElement>) => (
    <div className="relative overflow-auto">
      <table {...props} />
    </div>
  ),
  Tabs,
  Tab,
} satisfies MDXComponents

const getId = (content: React.ReactNode) => {
  if (typeof content !== 'string') return ''
  return String(content)
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}
