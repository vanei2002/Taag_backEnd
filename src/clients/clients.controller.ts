import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post('/newclient')
  create(@Body() createClientDto: CreateClientDto) {
    console.log(createClientDto);
    return this.clientsService.create(createClientDto);
  }

  @Post('/excel')
    async createExcel(@Body() createClienExceltDto: CreateClientDto) {
      return await this.clientsService.createExcel(createClienExceltDto);
  }
  
  @Get('/clients')
  async findClients() {
    return  await this.clientsService.findClients();
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
