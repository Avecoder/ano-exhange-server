import { Injectable } from '@nestjs/common';
import { CreateExchangersDto } from "./dtos/create-exchangers.dto";
import { InjectModel } from "@nestjs/mongoose";
import * as cheerio from 'cheerio';
import axios from 'axios'
import { Model } from "mongoose";
import { Exchangers, ExchangersDocument } from "./exchangers.model";


@Injectable()
export class ExchangersService {
  constructor(@InjectModel(Exchangers.name) private exchangersModel: Model<ExchangersDocument>) {}

  async create(exchangers: CreateExchangersDto) {
    const createdExchanger = await this.exchangersModel.create(exchangers)

    return createdExchanger.save()
  }


  async parse(url: string) {
    const res = await axios.get(url)

    const $ = await cheerio.load(res.data)

    const data = []

    const tableData =  $('#content_table tr')

    console.log(`${tableData}`)

    return tableData
  }
}
