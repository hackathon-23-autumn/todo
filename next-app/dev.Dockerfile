FROM node:18.18-alpine

COPY . .

RUN yarn global add pnpm && pnpm i

CMD pnpm dev