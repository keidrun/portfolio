FROM node:16-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
ENV GATSBY_TELEMETRY_DISABLED 1
RUN yarn build

FROM nginx:1.21-alpine
LABEL maintainer="Keid"
COPY --from=builder /app/public /usr/share/nginx/html
EXPOSE 80
