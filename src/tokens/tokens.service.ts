import { Injectable } from '@nestjs/common';
import { CreateTokensDto } from "./dtos/create-tokens.dto";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";
import { Tokens, TokensDocument } from "./tokens.model";

@Injectable()
export class TokensService {
  constructor(@InjectModel(Tokens.name) private tokensModel: Model<TokensDocument>) {}

  async create(token: CreateTokensDto) {

    const createdToken = await this.tokensModel.create(token)

    return createdToken.save()
  }
}
