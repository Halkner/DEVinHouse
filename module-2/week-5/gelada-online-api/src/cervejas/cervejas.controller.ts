import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
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
  findAll(@Query('page') page, @Query('limit') limit) {
    return this.cervejasService.findAll(page, limit);
  }

  @Get(':beerName')
  findOne(@Param('beerName') beerName: string) {
    return this.cervejasService.findOne(beerName);
  }

  @Put(':beerName')
  update(@Param('beerName') beerName: string, @Body() beerInfo: Cerveja) {
    return this.cervejasService.update(beerName, beerInfo);
  }

  @Delete(':beerName')
  remove(@Param('beerName') beerName: string) {
    return this.cervejasService.remove(beerName);
  }
}
