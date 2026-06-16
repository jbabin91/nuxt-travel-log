# syntax=docker/dockerfile:1

# Nuxt (Nitro node-server preset) on Node 24 with pnpm 11.
# Coolify's Nixpacks builder can't run this toolchain (its corepack can't launch
# pnpm 11 on Node 24, and npm's global bin isn't on its build PATH), so we own the
# build with a Dockerfile instead. Single stage on purpose: any deps Nitro leaves
# external resolve from /app/node_modules at runtime, so the final image keeps it.
FROM node:24-slim

WORKDIR /app

# Match package.json's "packageManager" pin.
RUN npm install -g pnpm@11.7.0

COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm run build

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
