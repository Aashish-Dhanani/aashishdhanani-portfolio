FROM node:20.9.0-buster

WORKDIR /src

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

