export interface Showcase {
  title: string
  description: string
  image: string
  url: string
}

export const projects = [
  {
    description:
      'A CLI tool for scaffolding type-safe, full-stack TypeScript applications with best practices and customizable.',
    image: '/assets/showcases/create-yuki-stack.png',
    title: 'Create Yuki Stack',
    url: 'https://www.npmjs.com/package/create-yuki-stack',
  },
  {
    description:
      'A component library for building beautiful and accessible user interfaces with React and Tailwind CSS.',
    image: '/assets/showcases/yuki-ui.png',
    title: 'Yuki UI',
    url: 'https://ui.tiesen.id.vn',
  },
  {
    description: 'Vercel theme for Neovim, inspired by Vercel’s design system.',
    image: '/assets/showcases/vercel-nvim.png',
    title: 'Vercel.nvim',
    url: 'https://github.com/tiesen243/vercel.nvim',
  },
] satisfies Showcase[]

export const designs = [
  '/assets/designs/tiesen-v3.png',
  '/assets/designs/tiesen-v2.png',
  '/assets/designs/goldenglow.png',
  '/assets/designs/lin-yushia.png',
  '/assets/designs/tiesen-v1.png',
]
