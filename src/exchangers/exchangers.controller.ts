import { Body, Controller, Post } from "@nestjs/common";
import { ExchangersService } from "./exchangers.service";
import { CreateExchangersDto } from "./dtos/create-exchangers.dto";

@Controller('exchangers')
export class ExchangersController {
  constructor( private exchangersService: ExchangersService) {}


  @Post()
  create(@Body() exchangers: CreateExchangersDto) {
    return this.exchangersService.create(exchangers)
  }

  @Post('/parse')
  parse(@Body() { url }: { url: string }) {
    return this.exchangersService.parse(url)
  }
}
