import { Module } from '@nestjs/common';
import { PrismaModule } from '@src/prisma/prisma.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserMapper } from './user.mapper';

@Module({
  controllers: [UsersController],
  imports: [PrismaModule],
  providers: [UsersService, UserMapper],
})
export class UsersModule {}
