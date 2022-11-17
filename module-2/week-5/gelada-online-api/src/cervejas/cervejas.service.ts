import { Injectable } from '@nestjs/common';
import { CreateCervejaDto } from './dto/create-cerveja.dto';
import { UpdateCervejaDto } from './dto/update-cerveja.dto';

@Injectable()
export class CervejasService {
  create(createCervejaDto: CreateCervejaDto) {
    return 'This action adds a new cerveja';
  }

  findAll() {
    return `This action returns all cervejas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cerveja`;
  }

  update(id: number, updateCervejaDto: UpdateCervejaDto) {
    return `This action updates a #${id} cerveja`;
  }

  remove(id: number) {
    return `This action removes a #${id} cerveja`;
  }
}
