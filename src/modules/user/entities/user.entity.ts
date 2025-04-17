// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { Document } from "mongoose";
//
// export type UserDocument = User & Document;
//
// @Schema()
// export class User {
//   @Prop({ required: true })
//   firstName: string;
//
//   @Prop({ required: true })
//   lastName: string;
//
//   @Prop({ required: true, unique: true })
//   email: string;
//
//   @Prop({ required: true })
//   age: number;
//
//   @Prop({ required: true })
//   phoneNumber: string;
//
//   @Prop({ required: true })
//   password: string;
// }
//
// export const UserSchema = SchemaFactory.createForClass(User);

// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
//
// @Entity()
// export class User {
//     @PrimaryGeneratedColumn()
//     userId: number;
//
//     @Column()
//     firstName: string;
//
//     @Column()
//     lastName: string;
//
//     @Column()
//     email: string;
//
//     @Column()
//     age: number;
//
//     @Column()
//     phoneNumber: string;
//
//     @Column()
//     password: string;
// }
