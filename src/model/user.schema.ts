import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// export type UserDocument = User & Document;

@Schema()
class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: Date.now() })
  createdAt: Date;
}

const UserSchema = SchemaFactory.createForClass(User);

export { User, UserSchema };
