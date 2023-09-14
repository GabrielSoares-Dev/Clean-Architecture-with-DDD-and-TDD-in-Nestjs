FROM node:18-alpine

RUN npm i -g pnpm

WORKDIR /app

COPY  package.json pnpm-lock.yaml ./
COPY . . 

RUN pnpm i

CMD pnpm run start:dev
