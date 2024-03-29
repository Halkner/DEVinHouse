import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { ShoppingCartsModule } from './shopping-carts/shopping-carts.module';

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ShoppingCartsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
