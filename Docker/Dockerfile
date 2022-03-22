FROM node:17

WORKDIR /stock

COPY stock/package.json ./

RUN yarn

COPY stock/. .

CMD ["yarn","start"]