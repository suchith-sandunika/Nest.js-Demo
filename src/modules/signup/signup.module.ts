import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { UserSchema } from '../../model/user.schema';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}
