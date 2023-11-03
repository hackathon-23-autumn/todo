FROM node:18.18-alpine

# 開発即時反映用の環境変数
WORKDIR /app

COPY . .

RUN yarn global add pnpm && pnpm i

CMD pnpm dev