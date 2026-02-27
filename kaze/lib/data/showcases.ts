export interface Showcase {
  title: string
  description: string
  image: string
  url: string
}

export const showcases = [
  {
    description:
      'A CLI tool for scaffolding type-safe, full-stack TypeScript applications with best practices and customizable.',
    image: '/assets/images/showcases/create-yuki-stack.png',
    title: 'Create Yuki Stack',
    url: 'https://www.npmjs.com/package/create-yuki-stack',
  },
  {
    description:
      'A component library for building beautiful and accessible user interfaces with React and Tailwind CSS.',
    image: '/assets/images/showcases/yuki-ui.png',
    title: 'Yuki UI',
    url: 'https://yuki-ui.vercel.app',
  },
  {
    description: 'Vercel theme for Neovim, inspired by Vercel’s design system.',
    image: '/assets/images/showcases/vercel-nvim.png',
    title: 'Vercel.nvim',
    url: 'https://github.com/tiesen243/vercel.nvim',
  },
] satisfies Showcase[]

export const designs = [
  '/assets/images/designs/tiesen-v3.png',
  '/assets/images/designs/tiesen-v2.png',
  '/assets/images/designs/goldenglow.png',
  '/assets/images/designs/lin-yushia.png',
  '/assets/images/designs/tiesen-v1.png',
]
