import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { CreateLoginDto } from './dto/create-login.dto';
import { jwtSecret } from '../../constants/constants';
import { User } from '../../model/user.schema';
import { Session } from '../../model/session.schema';
// import { User, UserDocument } from '../../model/user.schema';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    @InjectModel('Session') private sessionModel: Model<Session>,
  ) {}

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
          // Insert into session ...
          return this.sessionModel.create({
            userId: existingUser._id,
            token: token,
            sessionCreatedAt: new Date(),
          });
        }
      }
    } catch (error: any) {
      console.log(error);
      return 'error';
    }
  }
}
