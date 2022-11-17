import { PartialType } from '@nestjs/mapped-types';
import { CreateCervejaDto } from './create-cerveja.dto';

export class UpdateCervejaDto extends PartialType(CreateCervejaDto) {}
