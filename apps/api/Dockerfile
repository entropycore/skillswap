FROM node:20-alpine

RUN corepack enable && corepack prepare pnpm@latest -activate

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY src ./src

RUN pnpm install 

EXPOSE 4000

CMD ["pnpm", "start"]
