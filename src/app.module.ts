import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { CoinsModule } from './coins/coins.module';
import {ConfigModule} from "@nestjs/config";
import { TokensModule } from './tokens/tokens.module';
import { UserMetamaskModule } from './user-metamask/user-metamask.module';
import { ExchangersModule } from './exchangers/exchangers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.development.env`
    }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@exchangers.vspue78.mongodb.net/ano-exchangers`),
    CoinsModule,
    TokensModule,
    UserMetamaskModule,
    ExchangersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
