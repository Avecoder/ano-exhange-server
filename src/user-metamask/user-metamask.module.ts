import { Module } from '@nestjs/common';
import { UserMetamaskController } from './user-metamask.controller';
import { UserMetamaskService } from './user-metamask.service';
import { MongooseModule } from "@nestjs/mongoose";
import { UserMetamask, UserMetamaskSchema } from "./user-metamask.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: UserMetamask.name, schema: UserMetamaskSchema}
    ])
  ],
  controllers: [UserMetamaskController],
  providers: [UserMetamaskService]
})
export class UserMetamaskModule {}
