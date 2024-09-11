import { Injectable } from '@nestjs/common';
import { prismaClient, User } from 'prisma';

@Injectable()
export class UsersService {
  public list(): Promise<User[]> {
    return prismaClient.user.findMany();
  }

  public get(id: string): Promise<User> {
    return prismaClient.user.findUnique({
      where: { id },
    });
  }

  public create(dto: Omit<User, 'id'>): Promise<User> {
    return prismaClient.user.create({
      data: dto,
    });
  }

  public update(id: string, body: Partial<User>): Promise<User> {
    return prismaClient.user.update({
      where: { id },
      data: {
        ...body,
      },
    });
  }

  public remove(id: string): Promise<User> {
    return prismaClient.user.delete({
      where: { id },
    });
  }
}
