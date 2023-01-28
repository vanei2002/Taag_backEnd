import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.entity';
import { Model } from 'mongoose';


@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name)private userModel: Model<UserDocument>) {}

  async login({name, password}: CreateUserDto){

    const user = await this.userModel.findOne({name})

    try{
      if(user){
        if(user.password == password){
          return user;
        }else{
          return "Senha incorreta";
        }
      }

      return "Usuário não encontrado";
    }catch(err){
      console.log(err);
    }
  }

  async create({name, password,token}: CreateUserDto) {
    const validat = await this.userModel.findOne({name});
    try{

      if(validat) return "Usuário já cadastrado";
      const user = new this.userModel({name, password , token});

      if(user){
        user.save();
        return "Usuário cadastrado com sucesso";
      }

      return "Erro ao cadastrar usuário";
    }catch(err){
      console.log(err);
    }
  }

  async validateToken(token: string){
    const user = this.userModel.findOne({token});

    if(user){
      return user
    }
  }

  async findAll() {
    return await this.userModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
