import { Injectable } from '@nestjs/common';
import { <%= singular(classify(name)) %> } from '@repo/database';
import { PrismaService } from '@src/prisma/prisma.service';

@Injectable()
export class <%= classify(name) %>Service {
  constructor(private readonly prisma: PrismaService) {}

  public list(): Promise<<%= singular(classify(name)) %>[]> {
    return this.prisma.<%= singular(name) %>.findMany();
  }

  public get(id: string): Promise<<%= singular(classify(name)) %>> {
    return this.prisma.<%= singular(name) %>.findUnique({
      where: { id },
    });
  }

  public create(dto: Omit<<%= singular(classify(name)) %>, 'id'>): Promise<<%= singular(classify(name)) %>> {
    return this.prisma.<%= singular(name) %>.create({
      data: dto,
    });
  }

  public update(id: string, body: Partial<<%= singular(classify(name)) %>>): Promise<<%= singular(classify(name)) %>> {
    return this.prisma.<%= singular(name) %>.update({
      where: { id },
      data: {
        ...body,
      },
    });
  }

  public remove(id: string): Promise<<%= singular(classify(name)) %>> {
    return this.prisma.<%= singular(name) %>.delete({
      where: { id },
    });
  }
}
