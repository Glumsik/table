FROM node:alpine

WORKDIR /my-app

COPY package*.json ./

COPY ./ ./

RUN npm install
RUN npm install -g serve
RUN npm run-script build

EXPOSE 5000

CMD ["serve","-s","build"]


