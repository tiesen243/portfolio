FROM oven/bun

WORKDIR /app

COPY . .

RUN bun install

RUN bun run build

ENV NODE_ENV=production
EXPOSE 3000/tcp
CMD ["bun", "start"]

