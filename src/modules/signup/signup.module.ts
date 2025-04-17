import { Module } from "@nestjs/common";
import { SignupService } from "./signup.service";
import { SignupController } from "./signup.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../../model/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}
