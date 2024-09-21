import { Module } from '@nestjs/common';
import { PrismaModule } from '@src/prisma/prisma.module';
import { <%= classify(name) %>Service } from './<%= name %>.service';
import { <%= classify(name) %>Controller } from './<%= name %>.controller';
import { <%= singular(classify(name)) %>Mapper } from './<%= singular(name) %>.mapper';

@Module({
  controllers: [<%= classify(name) %>Controller],
  imports: [PrismaModule],
  providers: [<%= classify(name) %>Service, <%= singular(classify(name)) %>Mapper],
})
export class <%= classify(name) %>Module {}
