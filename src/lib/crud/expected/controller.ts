import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, OmitType, PartialType } from '@nestjs/swagger';
import { User } from '@src/dto/prisma/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  list(): Promise<User[]> {
    return this.usersService.list();
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<User> {
    return this.usersService.get(id);
  }

  @Post()
  @ApiBody({
    type: OmitType(User, ['id']),
  })
  create(@Body() dto: Omit<User, 'id'>): Promise<User> {
    return this.usersService.create(dto);
  }

  @Patch(':id')
  @ApiBody({
    type: PartialType(OmitType(User, ['id'])),
  })
  update(
    @Param('id') id: string,
    @Body() dto: Partial<User>
  ): Promise<User> {
    return this.usersService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(id);
  }
}
