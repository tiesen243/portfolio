![logo](./public/imgs/tiesen.png)

## My Portfolio Website

## Getting Started

First, clone the repository:

```bash
git clone git@github.com:tiesen243/portfolio.git portfolio
cd portfolio
bun install
```

Second, create a `.env.local` file in the root of the project and add the following:

```bash
NGITHUB_TOKEN=""
PROJECTS_URL="https://api.github.com/users/your github user name/repos"
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
