import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NestModule } from '@nestjs/common/interfaces/modules';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware';
import { UpdateImgMiddleware } from './middleware/update_Img.middleware';
import { RequestMethod } from '@nestjs/common/enums';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_DB}`),
    UsersModule,
    ClientsModule
  ],

})
export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer){
    consumer
      .apply(UpdateImgMiddleware)
      .forRoutes({path: 'users', method: RequestMethod.POST});
  }
}
