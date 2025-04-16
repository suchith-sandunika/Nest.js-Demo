import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MongooseModule.forRoot('mongodb://127.0.0.1:27017/Nest-App-DB'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
