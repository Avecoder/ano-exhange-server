import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class CoinDto {
  @IsString()
  id: string;

  @IsString()
  min: string;

  @IsNumber()
  curseToUsd: number;

  @IsString()
  reserve: string;
}

export class CreateExchangersDto {

  @IsString({message: 'Title must be a string'})
  @IsNotEmpty({message: 'Title must not be empty'})
  readonly title: string;

  @IsString({message: 'Url must be a string'})
  @IsNotEmpty({message: 'Url must not be empty'})
  readonly url: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoinDto)
  readonly coins: CoinDto[];
}
