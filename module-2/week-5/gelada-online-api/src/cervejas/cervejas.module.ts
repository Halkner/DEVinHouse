import { Module } from '@nestjs/common';
import { CervejasService } from './cervejas.service';
import { CervejasController } from './cervejas.controller';
import { Database } from 'src/database/database';

@Module({
  controllers: [CervejasController],
  providers: [CervejasService, Database],
})
export class CervejasModule {}
