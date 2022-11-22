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
import { Cerveja } from './entities/cerveja.entity';

@Controller('cervejas')
export class CervejasController {
  constructor(private readonly cervejasService: CervejasService) {}

  @Post()
  create(@Body() beer: Cerveja) {
    return this.cervejasService.create(beer);
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
  update(@Param('id') id: string) {
    return this.cervejasService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cervejasService.remove(+id);
  }
}
