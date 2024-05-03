import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { MDXComponents } from 'mdx/types'
import { Codeblock } from './code-block'

export const mdxComponents = {
  h1: (props) => <Typography variant="h1" {...props} />,
  h2: (props) => <Typography variant="h2" id={slugify(props.children)} {...props} />,
  h3: (props) => <Typography variant="h3" id={slugify(props.children)} {...props} />,
  h4: (props) => <Typography variant="h4" id={slugify(props.children)} {...props} />,

  p: (props) => <Typography variant="p" {...props} />,
  blockquote: (props) => <Typography variant="blockquote" {...(props as any)} />,
  ul: (props) => <Typography variant="ul" {...(props as any)} />,
  ol: (props) => <Typography variant="ol" {...(props as any)} />,

  a: ({ children, href }) => {
    const isExternal = href?.startsWith('http')
    const Component = isExternal ? 'a' : Link
    return (
      <Component
        href={href as string}
        className="decoration-primary underline-offset-4 hover:underline"
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Component>
    )
  },

  figure: (props) => <figure className="rounded-lg bg-secondary" {...props} />,
  figcaption: (props) => <figcaption className="pl-4 pt-4 font-bold" {...props} />,
  img: (props) => (
    <Image
      {...(props as ImageProps)}
      width={1920}
      height={1080}
      alt={props.alt || ''}
      className={cn(props.className, 'rounded-lg')}
    />
  ),

  code: (props) => (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      {...props}
    />
  ),
  pre: Codeblock,
} satisfies MDXComponents

const slugify = (input: unknown) => {
  if (typeof input !== 'string') return ''
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll(' ', '-')
    .toLowerCase()
    .trim()
}
