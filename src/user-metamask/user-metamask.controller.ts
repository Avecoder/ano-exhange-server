import { Body, Controller, Post } from "@nestjs/common";
import { UserMetamaskService } from "./user-metamask.service";
import { CreateUserMetamaskDto } from "./dtos/create-user-metamask.dto";

@Controller('user-metamask')
export class UserMetamaskController {
  constructor(private userMetamaskService: UserMetamaskService) {}

  @Post()
  create(@Body() metamaskUser: CreateUserMetamaskDto) {
    return this.userMetamaskService.create(metamaskUser)
  }
}
