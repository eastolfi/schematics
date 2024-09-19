import { Injectable } from '@nestjs/common';
import { User } from '@repo/database';
import { PrismaService } from '@src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  public list(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  public get(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  public create(dto: Omit<User, 'id'>): Promise<User> {
    return this.prisma.user.create({
      data: dto,
    });
  }

  public update(id: string, body: Partial<User>): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        ...body,
      },
    });
  }

  public remove(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
