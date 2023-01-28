import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './clients/clients.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://vaneimendes:94869709@cluster0.u27glfn.mongodb.net/Taag-Expereince`),
    UsersModule,
    ClientsModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],  
      isGlobal: true,
      ignoreEnvFile: true
    })
  ],

})
export class AppModule {}
