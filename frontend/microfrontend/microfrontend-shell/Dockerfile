FROM node:18-slim AS build-stage

ENV NODE_ENV development
WORKDIR /app
COPY package.json package-lock.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
