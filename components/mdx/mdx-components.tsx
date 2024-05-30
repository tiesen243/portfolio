import type { MDXComponents as TMDXComponents } from 'mdx/types'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import { Codeblock } from './code-block'

export const MDXComponents = (): TMDXComponents => {
  return {
    /* Typography */
    h2: (props) => (
      <h2
        {...props}
        id={slugify(props.children)}
        className="mt-4 scroll-m-20 pb-4 text-3xl font-semibold tracking-tight md:text-5xl"
      />
    ),
    h3: (props) => (
      <h3
        {...props}
        id={slugify(props.children)}
        className="mt-2 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight md:text-4xl"
      />
    ),
    h4: (props) => (
      <h4
        {...props}
        id={slugify(props.children)}
        className="mt-1 scroll-m-20 pb-1 text-xl font-semibold tracking-tight md:text-3xl"
      />
    ),
    p: (props) => (
      <p {...props} className="text-lg leading-7 md:text-xl [&:not(:first-child)]:mt-2" />
    ),
    blockquote: (props) => <blockquote {...props} className="my-4 border-l-2 pl-6 italic" />,
    ul: (props) => <ul {...props} className="my-2 ml-6 list-disc [&>li]:mt-2" />,
    ol: (props) => <ol {...props} className="my-2 ml-6 list-decimal [&>li]:mt-2" />,
    a: ({ children, href }) => {
      const isExternal = href?.startsWith('http')
      const Comp = isExternal ? 'a' : Link
      return (
        <Comp
          href={href!}
          className="underline-offset-4 hover:underline"
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </Comp>
      )
    },

    img: (props) => (
      <Image
        {...(props as ImageProps)}
        alt={props.alt ?? 'image'}
        width={1920}
        height={1080}
        className="rounded-lg shadow-lg"
      />
    ),

    figure: (props) => <figure {...props} className="my-4 rounded-lg bg-code shadow-lg" />,
    figcaption: (props) => (
      <figcaption {...props} className="rounded-t-lg bg-gray-900 p-2 font-medium text-white" />
    ),
    pre: (props) => <Codeblock {...props} />,
    code: (props) => (
      <code
        {...props}
        className="*:font-mono [&:not([data-language])]:rounded [&:not([data-language])]:bg-muted [&:not([data-language])]:p-1"
      />
    ),
  }
}

const slugify = (input: unknown) => {
  if (typeof input !== 'string') return ''
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll(' ', '-')
    .toLowerCase()
    .trim()
}
