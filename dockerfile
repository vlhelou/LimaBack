FROM node:latest
WORKDIR /api-app/
COPY package.json /api-app/
COPY main.js /api-app/

RUN npm i

CMD ["node", "main.js"]

EXPOSE 5000
