FROM node:lts-alpine

WORKDIR /usr/src/app

COPY webpack.config.js package.json package-lock.json battery.config.js ./
RUN npm install

COPY src/ ./src
COPY index.html ./
RUN npm run build

EXPOSE 8000
CMD ["npm", "run", "start"]