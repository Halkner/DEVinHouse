import { categoryEnum } from './../../utils/products.enum';
import { IsString, IsNotEmpty, IsEnum, IsNumber, IsBoolean } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
  
    @IsString()
    @IsNotEmpty()
    readonly description: string;
  
    @IsEnum(categoryEnum)
    readonly category: categoryEnum;
  
    @IsNumber()
    readonly value: number;
  
    @IsBoolean()
    readonly available: boolean;
}
