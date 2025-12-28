import { prisma } from '@/lib/prisma.js';
import { Prisma, type User } from '../../../generated/prisma/client.js';
import type { UsersRepository } from '@/repositories/type-users-repository.js';

export class PrismaUsersRepository implements UsersRepository {
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    });
    return user;
  }
}
