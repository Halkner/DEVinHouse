import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TwitterModule } from './twitter/twitter.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TwitterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
