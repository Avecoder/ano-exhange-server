import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from "mongoose";
import { Coins } from "../coins/coins.model";


@Schema()
export class Coin {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'coins' })
  id: Coins;

  @Prop({ required: true })
  min: string;

  @Prop({ required: true })
  curseToUsd: number;

  @Prop({ required: true })
  reserve: string;
}


@Schema({collection: 'exchangers'})
export class Exchangers {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  url: string;

  @Prop({required: true})
  coins: Coin[]
}


export type ExchangersDocument = Exchangers | Document

export const ExchangersSchema = SchemaFactory.createForClass(Exchangers)