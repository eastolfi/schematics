import { Injectable } from '@nestjs/common';
import { <%= singular(classify(name)) %> } from '@src/dto/prisma/<%= singular(name) %>';
import { PrismaService } from '@src/prisma/prisma.service';
import { <%= singular(classify(name)) %>Mapper } from './<%= singular(name) %>.mapper';

@Injectable()
export class <%= classify(name) %>Service {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mapper: <%= singular(classify(name)) %>Mapper,
  ) {}

  public list(): Promise<<%= singular(classify(name)) %>[]> {
    return this.prisma.<%= singular(name) %>
      .findMany()
      .then((<%= name %>: <%= singular(classify(name)) %>[]) => <%= name %>.map((<%= singular(name) %>: <%= singular(classify(name)) %>) => this.mapper.toDto(<%= singular(name) %>)));
  }

  public get(id: string): Promise<<%= singular(classify(name)) %>> {
    return this.prisma.<%= singular(name) %>
      .findUnique({
        where: { id },
      })
      .then((<%= singular(name) %>: <%= singular(classify(name)) %>) => this.mapper.toDto(<%= singular(name) %>));
  }

  public create(dto: Omit<<%= singular(classify(name)) %>, 'id'>): Promise<<%= singular(classify(name)) %>> {
    return this.prisma.<%= singular(name) %>
      .create({
        data: {
          // TO BE IMPLEMENTED
        },
      })
      .then((<%= singular(name) %>: <%= singular(classify(name)) %>) => this.mapper.toDto(<%= singular(name) %>));
  }

  public update(id: string, body: Partial<<%= singular(classify(name)) %>>): Promise<<%= singular(classify(name)) %>> {
    return this.prisma.<%= singular(name) %>
      .update({
        where: { id },
        data: {
          // TO BE IMPLEMENTED
        },
      })
      .then((<%= singular(name) %>: <%= singular(classify(name)) %>) => this.mapper.toDto(<%= singular(name) %>));
  }

  public remove(id: string): Promise<<%= singular(classify(name)) %>> {
    return this.prisma.<%= singular(name) %>
      .delete({
        where: { id },
      })
      .then((<%= singular(name) %>: <%= singular(classify(name)) %>) => this.mapper.toDto(<%= singular(name) %>));
  }
}
