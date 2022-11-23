import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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

  findAll(page: number, limit: number) {
    const beers = this.database.loadData();
    page = page || 0;
    limit = limit || 10;

    const startIndex = page * limit;
    const endIndex = startIndex + limit;

    if ( startIndex > beers.length) {
      throw new NotFoundException(`Page ${page} out of bounds`);
    }

    return beers.slice(startIndex, endIndex);
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
