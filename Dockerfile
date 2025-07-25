FROM node:20-alpine

WORKDIR /app    

COPY package*.json ./           
COPY package.json ./

RUN npm install 

COPY . .

ENV DATABASE_URL= postgresql://postgres:mysecretpassword@localhost:5432/postgres

RUN npx prisma migrate dev 
RUN npx prisma generate
RUN npm run build

CMD ["npm", "start"]
