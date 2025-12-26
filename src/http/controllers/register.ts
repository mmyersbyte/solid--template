import { prisma } from '@/lib/prisma.js';
import { z } from 'zod';
import type { FastifyRequest, FastifyReply } from 'fastify';

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6).max(20),
  });

  const { name, email, password } = registerBodySchema.parse(request.body);

  await prisma.user.create({
    data: {
      name: name,
      email: email,
      password_hash: password,
    },
  });
  return reply.status(201).send();
}
