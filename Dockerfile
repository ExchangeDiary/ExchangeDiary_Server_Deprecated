FROM node:14.15
WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 5000
CMD ["npm", "run", "start:prod"]