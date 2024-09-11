import { Module } from '@nestjs/common';
import { <%= classify(name) %>Service } from './<%= name %>.service';
import { <%= classify(name) %>Controller } from './<%= name %>.controller';

@Module({
  controllers: [<%= classify(name) %>Controller],
  providers: [<%= classify(name) %>Service],
})
export class <%= classify(name) %>Module {}
