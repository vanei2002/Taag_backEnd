import { Injectable } from '@nestjs/common';
import { CreateClientDto} from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client, ClientDocument } from './schema/client.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ClientsService {

  constructor(@InjectModel(Client.name)private clientsModel: Model<ClientDocument>){}

  async create(createClientDto: CreateClientDto) {
    
    const data = await this.clientsModel.findOne({cep: createClientDto.cep})

    if(data){
      return 'Client already exists';
    }else{
      const client = new this.clientsModel(createClientDto);
      client.save();
      return 'Client created with success';
    };
  }

  createExcel(createClientDto: CreateClientDto) {
    console.log(createClientDto);
  }

  findClients() {
    const client = this.clientsModel.find();
    return client;
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
