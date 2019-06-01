FROM node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN yarn --silent
RUN yarn add react-scripts@3.0.1 -g --silent

COPY . /app
CMD ["yarn", "start"]

EXPOSE 3001
