import express from 'express';
import { PrismaClient } from './generated/prisma';

const app = express();
const prismaClient = new PrismaClient();

app.get('/', async(req, res) => {
  const data =   await prismaClient.user.findMany();
      
  res.send({
   data
  })
});
app.post('/', async (req, res) => {
    await prismaClient.user.create({
        data: { 
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
  res.send({
    "message":"post endpoint",
  })
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

