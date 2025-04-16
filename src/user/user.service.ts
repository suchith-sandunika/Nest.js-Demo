import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../model/user.schema';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    // const newUser = new this.userModel(createUserDto);
    // console.log(newUser);
    // return newUser.save();
    return this.userModel.create({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
      age: createUserDto.age,
      phoneNumber: createUserDto.phoneNumber,
      password: createUserDto.password,
    });
    // return newUser;
  }

  findAll() {
    return this.userModel;
  }

  findOne(id: number) {
    return this.userModel.findById({ userId: id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate({ userId: id }, { firstName: updateUserDto.firstName, lastName: updateUserDto.lastName, email: updateUserDto.email, age: updateUserDto.age, phoneNumber: updateUserDto.phoneNumber });
  }

  remove(id: number) {
    return this.userModel.findByIdAndDelete({ userId: id });
  }
}
