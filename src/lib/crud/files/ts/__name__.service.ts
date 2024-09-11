import { Injectable } from '@nestjs/common';
import { prisma, <%= singular(classify(name)) %> } from '@repo/database';

@Injectable()
export class <%= classify(name) %>Service {
  public list(): Promise<<%= singular(classify(name)) %>[]> {
    return prisma.<%= singular(name) %>.findMany();
  }

  public get(id: string): Promise<<%= singular(classify(name)) %>> {
    return prisma.<%= singular(name) %>.findUnique({
      where: { id },
    });
  }

  public create(dto: Omit<<%= singular(classify(name)) %>, 'id'>): Promise<<%= singular(classify(name)) %>> {
    return prisma.<%= singular(name) %>.create({
      data: dto,
    });
  }

  public update(id: string, body: Partial<<%= singular(classify(name)) %>>): Promise<<%= singular(classify(name)) %>> {
    return prisma.<%= singular(name) %>.update({
      where: { id },
      data: {
        ...body,
      },
    });
  }

  public remove(id: string): Promise<<%= singular(classify(name)) %>> {
    return prisma.<%= singular(name) %>.delete({
      where: { id },
    });
  }
}
