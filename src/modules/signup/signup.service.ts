import { Injectable } from '@nestjs/common';
import { CreateSignupDto } from './dto/create-signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { User } from '../../model/user.schema';
// import { User, UserDocument } from '../../model/user.schema';

@Injectable()
export class SignupService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async signUp(createSignupDto: CreateSignupDto): Promise<any> {
    try {
      const userEmail = createSignupDto.email;
      const existingUser = await this.userModel.findOne({ email: userEmail });
      if (!existingUser) {
        const userPassword = createSignupDto.password;
        const hashPassword = await bcrypt.hash(userPassword, 10);
        const newUser = new this.userModel({
          firstName: createSignupDto.firstName,
          lastName: createSignupDto.lastName,
          email: createSignupDto.email,
          age: createSignupDto.age,
          phoneNumber: createSignupDto.phoneNumber,
          password: hashPassword,
        });
        await newUser.save();
      } else {
        return 'User already exists';
      }
    } catch (error: any) {
      console.error(error);
      return 'Error while creating user';
    }
  }
}
