import 'dotenv/config';
import fastify from 'fastify';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });

const prisma = new PrismaClient({ adapter });
export const app = fastify();

prisma.user.create({
  data: {
    name: 'Pedro Victor',
    email: 'pedro@gmail.com',
  },
});

export { prisma };
