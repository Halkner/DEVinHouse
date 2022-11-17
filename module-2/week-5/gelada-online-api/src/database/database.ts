import { Injectable } from "@nestjs/common";

@Injectable()
export class Database{
    private FILENAME = './src/database/beers.json';
}