import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTokensDto } from "../tokens/dtos/create-tokens.dto";
import { UserMetamask, UserMetamaskDocument } from "./user-metamask.model";

@Injectable()
export class UserMetamaskService {
  constructor(@InjectModel(UserMetamask.name) private userMetamaskModel: Model<UserMetamaskDocument>) {}

  async create(userMetamask: CreateTokensDto) {

    const createdUser = await this.userMetamaskModel.create(userMetamask)

    return createdUser.save()

  }
}
