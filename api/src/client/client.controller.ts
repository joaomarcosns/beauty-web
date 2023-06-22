import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { IClient } from '../types/clientType';
import { ClientSchema } from './client.schema';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findAllUsers() {
    return this.clientService.findAll();
  }

  @Post()
  async create(@Body() client: IClient) {
    try {
      await ClientSchema.validate(client, { abortEarly: false });
      return client;
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      throw new BadRequestException({
        message: 'Erro de validação',
        errors: validationErrors,
      });
    }
  }
}
