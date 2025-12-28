import { hash } from 'bcryptjs';
import { prisma } from '@/lib/prisma.js';
import type { UsersRepository } from '@/repositories/type-users-repository.js';

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async executeRegisterUseCase({
    name,
    email,
    password,
  }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new Error('Email already in use.');
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    });
  }
}
