import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from '@ewpo/database';
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
  create(@Body() dto: Omit<User, 'id'>): Promise<User> {
    return this.usersService.create(dto);
  }

  @Patch(':id')
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
