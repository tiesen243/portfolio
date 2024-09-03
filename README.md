# My Portfolio Website

This is a portfolio website template built with the [T3 Stack](https://create.t3.gg/). It includes a blog, a contact form, and a portfolio section. It is built with Next.js, Tailwind CSS, Sanity, and Resend.

## Tech Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Sanity](https://www.sanity.io)
- [Resend](https://resend.io)

## Getting Started

1. Clone the repository:

```bash
git clone git@github.com:tiesen243/portfolio.git
```

2. Install the dependencies:

```bash
# using npm
npm install

# using yarn
yarn

# using pnpm
pnpm install

# using bun
bun install
```

3. Create a `.env` file in the root of the project and add the following environment variables:

```bash
RESEND_KEY=

NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_PROJECT_ID=
```

4. Start the development server:

```bash
# using npm
npm run dev

# using yarn
yarn dev

# using pnpm
pnpm dev

# using bun
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

> Note: I built the `Sanity` management system for this project. You can find the code in this [repository](https://github.com/tiesen243/yukie.git).

## License

This project is open source and available under the [MIT License](LICENSE.md).
