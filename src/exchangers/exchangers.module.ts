import { Module } from '@nestjs/common';
import { ExchangersController } from './exchangers.controller';
import { ExchangersService } from './exchangers.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Exchangers, ExchangersSchema } from "./exchangers.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Exchangers.name, schema: ExchangersSchema}
    ])
  ],
  controllers: [ExchangersController],
  providers: [ExchangersService]
})
export class ExchangersModule {}
