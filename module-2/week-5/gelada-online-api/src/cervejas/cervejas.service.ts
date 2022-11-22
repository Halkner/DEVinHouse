import { ConflictException, Injectable } from '@nestjs/common';
import { Database } from 'src/database/database';
import { Cerveja } from './entities/cerveja.entity';

@Injectable()
export class CervejasService {
  constructor(private database: Database) {}


  create(beer: Cerveja) {
    const beers = this.database.loadData();
    const beerExists = beers.find((b: Cerveja) => b.name.toLowerCase() === beer.name.toLowerCase());

    if(beerExists) {
      throw new ConflictException({
        statusCode: 409,
        message: 'Beer already exists',
      });
    }
    this.database.saveData(beer);

    return beer;
  }

  findAll() {
    return `This action returns all cervejas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cerveja`;
  }

  update(id: number) {
    return `This action updates a #${id} cerveja`;
  }

  remove(id: number) {
    return `This action removes a #${id} cerveja`;
  }
}
