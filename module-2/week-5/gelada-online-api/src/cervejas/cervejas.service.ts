import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { writeFileSync } from 'fs';
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

  findOne(name: string) {
    const beers = this.database.loadData();

    const filteredBeer = beers.find((beer) => beer.name.toLowerCase() === name.toLowerCase());

    if(!filteredBeer){
      throw new NotFoundException({
        error: 404,
        message: 'Beer not found',
      });
    }

    return filteredBeer;
  }

  update(beerName: string, beerInfo: Cerveja) {
    const beers = this.database.loadData();
    const indexBeer = beers.findIndex((beer) => beer.name.toLowerCase() === beerName.toLowerCase());

    if(indexBeer === -1){
      throw new NotFoundException({
        error: 404,
        message: 'Beer not found',
      });
    }

    beers[indexBeer] = beerInfo;

    writeFileSync('./src/database/beers.json', JSON.stringify(beers));

    return beers[indexBeer];
  }

  remove(beerName: string) {
    return `This action removes a #${beerName} cerveja`;
  }
}
