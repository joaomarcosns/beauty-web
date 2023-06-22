import { Injectable } from '@nestjs/common';
import prisma from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  async findAll() {
    return prisma.client.findMany();
  }
}
