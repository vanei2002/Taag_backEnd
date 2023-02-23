import { Injectable } from '@nestjs/common';
import { CreateClientDto} from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client, ClientDocument } from './schema/client.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Console } from 'console';

@Injectable()
export class ClientsService {

  constructor(@InjectModel(Client.name)private clientsModel: Model<ClientDocument>){}

  async create(createClientDto: CreateClientDto) {
    
    const data = await this.clientsModel.findOne({cep: createClientDto.cep , name: createClientDto.name})

    if(data){
      return 'Client already exists';
    }else{
      const client = new this.clientsModel(createClientDto);
      client.save();
      return 'Client created with success';
    };
  }

  
  async findClients() {
    const client = await this.clientsModel.find();
    console.log(client);
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

  async exportExcel() {
    const client = await this.clientsModel.find();
    return client;
  }
  

  async importExcel(createClientDto: CreateClientDto) {

    if(createClientDto.name == '') return 

    const data = await this.clientsModel.findOne({cep: createClientDto.cep  , name: createClientDto.name})

    if(!data){
      const client = new this.clientsModel(createClientDto);
      client.save();
      return 'Client created with success';

    }

    console.log('Client already exists');
    return 'Client already exists';
  }

}
