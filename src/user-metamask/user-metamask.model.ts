import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from "mongoose";

@Schema({collection: 'user-metamask'})
export class UserMetamask {
  @Prop({ required: true, type: String })
  value: string;

}

export type UserMetamaskDocument = UserMetamask | Document


export const UserMetamaskSchema = SchemaFactory.createForClass(UserMetamask)