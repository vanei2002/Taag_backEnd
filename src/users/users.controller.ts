import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return await this.usersService.create(createUserDto);
  }

  @Post('/login')
  async login(@Body() loginUserDto: CreateUserDto){
    return await this.usersService.login(loginUserDto);
  }

  @Post('/validate')
  async validate(@Body() loginUserDto: CreateUserDto){
    return await this.usersService.validateToken(loginUserDto.token);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
