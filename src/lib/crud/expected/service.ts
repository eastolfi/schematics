import { Injectable } from '@nestjs/common';
import { prisma, User } from '@repo/database';

@Injectable()
export class UsersService {
  public list(): Promise<User[]> {
    return prisma.user.findMany();
  }

  public get(id: string): Promise<User> {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  public create(dto: Omit<User, 'id'>): Promise<User> {
    return prisma.user.create({
      data: dto,
    });
  }

  public update(id: string, body: Partial<User>): Promise<User> {
    return prisma.user.update({
      where: { id },
      data: {
        ...body,
      },
    });
  }

  public remove(id: string): Promise<User> {
    return prisma.user.delete({
      where: { id },
    });
  }
}
