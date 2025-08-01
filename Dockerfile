# Base stage to install dependencies
FROM public.ecr.aws/docker/library/node:lts AS base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Install dependencies
FROM base AS app-base
COPY . .

# App stages
FROM base AS web-app
EXPOSE 3000
CMD ["yarn", "dev"]

