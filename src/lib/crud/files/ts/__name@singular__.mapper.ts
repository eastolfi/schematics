import { Injectable } from '@nestjs/common';
import { <%= singular(classify(name)) %> } from '@prisma/client';
import { <%= singular(classify(name)) %> as <%= singular(classify(name)) %>Dto } from '@src/dto/prisma/<%= singular(name) %>';

@Injectable()
export class <%= singular(classify(name)) %>Mapper {
  public toDto(entity: <%= singular(classify(name)) %>): <%= singular(classify(name)) %>Dto {
    return {
      // TO BE IMPLEMENTED
    } as <%= singular(classify(name)) %>Dto;
  }
}
