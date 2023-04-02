import { Injectable } from '@nestjs/common';
import { CreateCoinsDto } from "./dtos/create-coins.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose'
import { Coins, CoinsDocument} from './coins.model'

@Injectable()
export class CoinsService {
  constructor(@InjectModel(Coins.name) private coinsModel: Model<CoinsDocument>) {}

  async create(coins: CreateCoinsDto) {
    const coin = await this.coinsModel.create(coins)

    return coin.save()

  }
}
