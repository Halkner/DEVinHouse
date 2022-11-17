import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CervejasService } from './cervejas.service';
import { CreateCervejaDto } from './dto/create-cerveja.dto';
import { UpdateCervejaDto } from './dto/update-cerveja.dto';

@Controller('cervejas')
export class CervejasController {
  constructor(private readonly cervejasService: CervejasService) {}

  @Post()
  create(@Body() createCervejaDto: CreateCervejaDto) {
    return this.cervejasService.create(createCervejaDto);
  }

  @Get()
  findAll() {
    return this.cervejasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cervejasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCervejaDto: UpdateCervejaDto) {
    return this.cervejasService.update(+id, updateCervejaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cervejasService.remove(+id);
  }
}
