import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { <%= singular(classify(name)) %> } from '@repo/database';
import { <%= classify(name) %>Service } from './<%= name %>.service';

@Controller('<%= dasherize(name) %>')
export class <%= classify(name) %>Controller {
  constructor(private readonly <%= lowercased(name) %>Service: <%= classify(name) %>Service) {}

  @Get()
  list(): Promise<<%= singular(classify(name)) %>[]> {
    return this.<%= lowercased(name) %>Service.list();
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<<%= singular(classify(name)) %>> {
    return this.<%= lowercased(name) %>Service.get(id);
  }

  @Post()
  create(@Body() dto: Omit<<%= singular(classify(name)) %>, 'id'>): Promise<<%= singular(classify(name)) %>> {
    return this.<%= lowercased(name) %>Service.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: Partial<<%= singular(classify(name)) %>>
  ): Promise<<%= singular(classify(name)) %>> {
    return this.<%= lowercased(name) %>Service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<<%= singular(classify(name)) %>> {
    return this.<%= lowercased(name) %>Service.remove(id);
  }
}
