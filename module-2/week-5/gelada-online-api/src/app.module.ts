import { Module } from '@nestjs/common';
import { CervejasModule } from './cervejas/cervejas.module';

@Module({
  imports: [CervejasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
