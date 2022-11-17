import { IsNotEmpty, IsString, IsEnum } from "class-validator";
import { BeerType } from "../types/beer-type.enum";

export class Cerveja {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  factoryName: string;

  @IsNotEmpty()
  @IsEnum(BeerType)  
  category: BeerType;
}
