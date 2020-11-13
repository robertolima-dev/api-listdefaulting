FROM node:12-alpine

WORKDIR /usr/app
COPY package.json package-lock.json ./

RUN npm i

COPY . .

EXPOSE 3000
CMD ["npm", "start"]