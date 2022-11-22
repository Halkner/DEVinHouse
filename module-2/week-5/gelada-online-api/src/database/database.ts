import { Injectable } from "@nestjs/common";
import { readFileSync, writeFileSync } from "fs";
import { Cerveja } from "src/cervejas/entities/cerveja.entity";

@Injectable()
export class Database{
    private FILENAME = './src/database/beers.json';

    public saveData(data: Cerveja) {
        const content = JSON.parse(readFileSync(this.FILENAME, 'utf-8'));

        const updatedContent = [...content, data];

        writeFileSync(this.FILENAME, JSON.stringify(updatedContent));

        return data;
    }

    public loadData(){
        const content = JSON.parse(readFileSync(this.FILENAME, 'utf-8'));

        return content;
    }
}