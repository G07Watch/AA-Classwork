FROM node:10-alpine AS node-build

EXPOSE 3000
WORKDIR /app
COPY . .

RUN npm install \
  && npm cache clean --force

CMD ["npm", "start"]


