import { Module } from '@nestjs/common';
import { CervejasService } from './cervejas.service';
import { CervejasController } from './cervejas.controller';

@Module({
  controllers: [CervejasController],
  providers: [CervejasService],
})
export class CervejasModule {}
