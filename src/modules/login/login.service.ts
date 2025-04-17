import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../../model/user.schema';
import { Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { jwtSecret } from '../../constants/constants';

@Injectable()
export class LoginService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async login(createLoginDto: CreateLoginDto): Promise<any> {
    try {
      const email = createLoginDto.email;
      const password = createLoginDto.password;
      const existingUser = await this.userModel.findOne({ email: email });
      if (!existingUser) {
        return 'No existing user found';
      } else {
        const validPassword = await bcrypt.compare(
          password,
          existingUser.password,
        );
        if (!validPassword) {
          return 'Password is incorrect';
        } else {
          const token: string = jwt.sign(
            {
              id: existingUser._id,
            },
            jwtSecret,
            { expiresIn: '1d' },
          );
          return [existingUser, token];
        }
      }
    } catch (error: any) {
      console.log(error);
      return 'error';
    }
  }
}
