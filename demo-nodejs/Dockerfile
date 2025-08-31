FROM node:23-alpine

WORKDIR /app    

COPY app/package.json app/package-lock.json* ./
RUN npm install

COPY app/main.js ./

EXPOSE 3000

CMD ["node", "main.js"]