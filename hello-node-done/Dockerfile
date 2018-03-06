FROM node:9-alpine

ENV PORT=80

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

EXPOSE ${PORT}

CMD node app.js