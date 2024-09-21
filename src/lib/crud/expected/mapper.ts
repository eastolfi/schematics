import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { User as UserDto } from '@src/dto/prisma/user';

@Injectable()
export class UserMapper {
  public toDto(entity: User): UserDto {
    return {
      // TO BE IMPLEMENTED
    } as UserDto;
  }
}
