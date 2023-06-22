import { Injectable } from '@nestjs/common';
import prisma from 'src/prisma/prisma.service';

@Injectable()
export class ClientService {
  async findAll() {
    return prisma.client.findMany();
  }
}
