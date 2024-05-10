![img](./public/images/tiesen.png)

## This is my portfolio page. It contains information about me, my projects, my contact information, and my blog.

## Tech stack

1. Next.js
2. MDX
3. TailwindCSS

## Installation

```
git clone git@github.com:tiesen243/portfolio.git
cd portfolio
bun install
```

## Usage

1. Add enviables

```
GITHUB_TOKEN=
PROJECTS_URL="https://api.github.com/users/{your github username}/repos
```

**Note**: i have env "NEXT_PUBLIC_SEND_EMAIL", this is my send email api, you must remove it from `contact/form.tsx` or change it to your email server

2. Run server

```
bun dev
```
