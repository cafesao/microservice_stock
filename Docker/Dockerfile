FROM node:17

WORKDIR /payment

COPY yarn.lock package.json ./

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn","start"]