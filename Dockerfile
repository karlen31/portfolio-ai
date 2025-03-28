# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app

# Create .npmrc with GSAP auth token
ARG GSAP_TOKEN
RUN echo "@gsap:registry=https://npm.greensock.com" > .npmrc && \
    echo "//npm.greensock.com/:_authToken=${GSAP_TOKEN}" >> .npmrc

COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app

# Copy .npmrc and dependencies
COPY --from=deps /app/.npmrc .npmrc
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build
RUN rm -f .npmrc

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"] 