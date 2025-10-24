export interface Showcase {
  title: string
  description: string
  image: string
  url: string
}

export const showcases = [
  {
    title: 'Create Yuki Stack',
    description:
      'A CLI tool for scaffolding type-safe, full-stack TypeScript applications with best practices and customizable.',
    image: '/assets/images/showcases/create-yuki-stack.png',
    url: 'https://www.npmjs.com/package/create-yuki-stack',
  },
  {
    title: 'Yuki UI',
    description:
      'A component library for building beautiful and accessible user interfaces with React and Tailwind CSS.',
    image: '/assets/images/showcases/yuki-ui.png',
    url: 'https://yuki-ui.vercel.app',
  },
  {
    title: 'Vercel.nvim',
    description: 'Vercel theme for Neovim, inspired by Vercel’s design system.',
    image: '/assets/images/showcases/vercel-nvim.png',
    url: 'https://github.com/tiesen243/vercel.nvim',
  },
] satisfies Showcase[]
