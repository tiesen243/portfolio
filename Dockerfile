FROM oven/bun:latest AS base

# ===========================================
# Stage 1: Prune application dependencies
# ===========================================
FROM base AS prepare
WORKDIR /prune

RUN bun install -g turbo

COPY . .
RUN turbo prune @yuki/kaze --docker

# ===========================================
# Stage 2: Build application
# ===========================================
FROM base AS builder
WORKDIR /build

COPY --from=prepare /prune/out/json .
RUN bun ci 

COPY --from=prepare /prune/out/full .

# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM
#
# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

ENV NEXT_BUILD_OUTPUT=standalone
ENV SKIP_ENV_VALIDATION=true

RUN bun run build

# ===========================================
# Stage 3: Production image
# ===========================================
FROM base AS runner
WORKDIR /app

ENV PORT=3000 \
    HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 portfolio && \
    adduser --system --uid 1001 yuki
USER yuki

COPY --from=builder --chown=yuki:portfolio /build/kaze/.next/standalone ./
COPY --from=builder --chown=yuki:portfolio /build/kaze/.next/static ./kaze/.next/static
COPY --from=builder --chown=yuki:portfolio /build/kaze/public ./kaze/public

ENV NODE_ENV=production
CMD ["bun", "--bun", "run", "kaze/server.js"]
