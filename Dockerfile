FROM node:11.11-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.15-alpine
LABEL maintainer="Keid"
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
