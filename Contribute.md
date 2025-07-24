## Masnual installation
- Install node.js locally()
- clone the repo
- Install all dependencies(npm install)
- start the database Locally
   - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
   - get yourself database
- change the .env file and update your db credentials
- npx prisma init 
- npx prisma migrate dev 
- npx prisma generate
- npm run build
- npm start

## Docker installation
- Install docker 
- start Postgres
  - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
- Build the Image - `docker build -t user-project`
- Start the Image - `docker run -p 3000:3000 user-project` 

## Docker compose installation steps

- Install docker ,docker-compose
- Run `docker-compose up`
