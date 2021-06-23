import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://main_user:password10@cluster0.4dmfy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    autoCreate: true
  }), 
  ProductModule,
  HttpModule    // added in order to send request from main to admin
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
