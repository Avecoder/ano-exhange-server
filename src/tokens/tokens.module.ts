import { Module } from '@nestjs/common';
import { TokensController } from './tokens.controller';
import { TokensService } from './tokens.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Tokens, TokensSchema } from "./tokens.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Tokens.name, schema: TokensSchema}
    ])
  ],
  controllers: [TokensController],
  providers: [TokensService]
})
export class TokensModule {}
