FROM node:14.15.4-alpine

WORKDIR /portfolio

COPY . .
RUN npm install
RUN npm run build

CMD [ "npm","start" ]
