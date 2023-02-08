import { Injectable } from '@nestjs/common';
import { CreateClientDto} from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import readXlsxFile from 'read-excel-file/node';

@Injectable()
export class ClientsService {

  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client' + createClientDto;
  }

  createExcel(createClientDto: any) {

    readXlsxFile(createClientDto).then((rows) => console.log(rows));

    return `  This action adds a new client from excel file ${createClientDto}  `;
  }

  findAll() {
    return `This action returns all clients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
