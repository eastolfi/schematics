import { Injectable } from '@nestjs/common';
import { User } from '@src/dto/prisma/user';
import { PrismaService } from '@src/prisma/prisma.service';
import { UserMapper } from './user.mapper';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mapper: UserMapper,
  ) {}

  public list(): Promise<User[]> {
    return this.prisma.user
      .findMany()
      .then((users: User[]) => users.map((user: User) => this.mapper.toDto(user)));
  }

  public get(id: string): Promise<User> {
    return this.prisma.user
      .findUnique({
        where: { id },
      })
      .then((user: User) => this.mapper.toDto(user));
  }

  public create(dto: Omit<User, 'id'>): Promise<User> {
    return this.prisma.user
      .create({
        data: {
          // TO BE IMPLEMENTED
        },
      })
      .then((user: User) => this.mapper.toDto(user));
  }

  public update(id: string, body: Partial<User>): Promise<User> {
    return this.prisma.user
      .update({
        where: { id },
        data: {
          // TO BE IMPLEMENTED
        },
      })
      .then((user: User) => this.mapper.toDto(user));
  }

  public remove(id: string): Promise<User> {
    return this.prisma.user
      .delete({
        where: { id },
      })
      .then((user: User) => this.mapper.toDto(user));
  }
}
