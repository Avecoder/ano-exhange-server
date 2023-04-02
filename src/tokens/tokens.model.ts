import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({collection: 'tokens'})
export class Tokens {
  @Prop({ required: true, type: String })
  value: string;



}

export type TokensDocument = Tokens | Document


export const TokensSchema = SchemaFactory.createForClass(Tokens)