FROM node:13.0-alpine as build-stage

WORKDIR /app
COPY . .

RUN npm install \
  && npm cache clean --force

RUN npm start

FROM nginx:1.17.5-alpine
EXPOSE 80

RUN apk add curl

COPY --from=build-stage /app /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

HEALTHCHECK --start-period=5s --interval=5s \
  CMD curl -f http://localhost:80/ || exit 1

