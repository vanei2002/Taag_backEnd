import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get('/clients')
  async findClients() {
    return  await this.clientsService.findClients();
  }

  @Get('/export')
  async exportExcel() {
    return  await this.clientsService.exportExcel();
  }

  @Post('/newclient')
  create(@Body() createClientDto: CreateClientDto) {
    console.log(createClientDto);
    return this.clientsService.create(createClientDto);
  }

  @Post('/excel')
    async importExcel(@Body() createClienExceltDto: CreateClientDto) {
      return await this.clientsService.importExcel(createClienExceltDto);
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
