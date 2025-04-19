import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { sessionStatus } from '../constants/statusStatus';

// export type SessionDocument = Session & Document;

@Schema()
export class Session {
  @Prop({ required: true })
  userId: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  token: string;

  @Prop({ default: Date.now() })
  sessionCreatedAt: Date;

  @Prop({ default: null })
  sessionEndedAt: Date;

  @Prop({ enum: sessionStatus, default: sessionStatus.ACCEPTED })
  status: string;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
