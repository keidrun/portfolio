FROM node:10.11.0-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.15.5-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
