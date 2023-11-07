FROM node:18.18-alpine

# 開発即時反映用の環境変数
WORKDIR /app

RUN npm install -g pnpm

ENV NODE_ENV=development

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

CMD ["pnpm", "run", "dev"]