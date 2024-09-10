import type { MDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { CodeBlock } from './code-block'

export const components: MDXComponents = {
  // heading
  h1: (props) => <h1 id={createId(props.children as string)} {...props} />,
  h2: (props) => <h2 id={createId(props.children as string)} {...props} />,
  h3: (props) => <h3 id={createId(props.children as string)} {...props} />,
  h4: (props) => <h4 id={createId(props.children as string)} {...props} />,

  img: (props) => (
    <Image
      {...(props as ImageProps)}
      alt={props.alt!}
      width={1920}
      height={1080}
      className="rounded-lg object-cover shadow-md"
    />
  ),

  a: (props) => {
    const isExternal = props.href!.startsWith('http')
    return (
      <Link
        {...props}
        href={props.href!}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      />
    )
  },

  figure: CodeBlock,
}

export const createId = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}
