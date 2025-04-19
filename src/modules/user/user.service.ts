import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../../model/user.schema';
// import { User, UserDocument } from '../../model/user.schema';

@Injectable()
export class UserService {
  // constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    console.log(newUser);
    return newUser.save();
    // return this.userModel.create({
    //   firstName: createUserDto.firstName,
    //   lastName: createUserDto.lastName,
    //   email: createUserDto.email,
    //   age: createUserDto.age,
    //   phoneNumber: createUserDto.phoneNumber,
    //   password: createUserDto.password
    // });
    // return newUser;
  }

  findAll(): Promise<any> {
    const users = this.userModel.find().exec();
    return users;
  }

  findOne(id: number): Promise<any> {
    const user = this.userModel.findOne({ userId: id }).exec();
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    const user = this.userModel.findOneAndUpdate(
      { userId: id },
      {
        firstName: updateUserDto.firstName,
        lastName: updateUserDto.lastName,
        email: updateUserDto.email,
        age: updateUserDto.age,
        phoneNumber: updateUserDto.phoneNumber,
        password: updateUserDto.password,
      },
    );
    return user;
  }

  remove(id: number): Promise<any> {
    const user = this.userModel.findOneAndDelete({ userId: id });
    return user;
  }
}
