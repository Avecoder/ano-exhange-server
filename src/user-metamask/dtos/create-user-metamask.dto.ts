import {IsNotEmpty, IsString} from "class-validator";

export class CreateUserMetamaskDto {

  @IsString({message: 'Value must be a string'})
  @IsNotEmpty({message: 'Value must not be empty'})
  readonly value: string;
}