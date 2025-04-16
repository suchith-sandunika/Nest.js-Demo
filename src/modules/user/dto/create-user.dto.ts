import { IsEmail, IsInt, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsInt()
  age: number;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsString()
  password: string;
}
