FROM node:18-alpine

RUN npm i -g pnpm

WORKDIR /app

COPY  package.json pnpm-lock.yaml ./
COPY . . 

RUN pnpm i

RUN apk --no-cache add aws-cli

RUN aws configure set aws_access_key_id AKIAYR37QRG4WJTCA6F6
RUN aws configure set aws_secret_access_key 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
RUN aws configure set default.region us-east-2

CMD pnpm run start:dev
