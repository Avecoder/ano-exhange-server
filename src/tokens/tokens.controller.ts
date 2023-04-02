import { Body, Controller, Post } from "@nestjs/common";
import { TokensService } from "./tokens.service";
import { CreateTokensDto } from "./dtos/create-tokens.dto";

@Controller('tokens')
export class TokensController {
  constructor(private tokensService: TokensService) {}

  @Post()
  create(@Body() token: CreateTokensDto) {
    return this.tokensService.create(token)
  }
}
