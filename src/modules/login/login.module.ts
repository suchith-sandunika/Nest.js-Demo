import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UserSchema } from '../../model/user.schema';
import { SessionSchema } from '../../model/session.schema';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Session', schema: SessionSchema }]),
  ],
  providers: [LoginService],
  controllers: [LoginController],
})
export class LoginModule {}
