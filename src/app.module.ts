import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './clients/clients.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PW}@${process.env.MONGO_DB_LINK}`),
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
