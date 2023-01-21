import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { ShoppingCart } from 'src/shopping-carts/entities/shopping-cart.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class ShoppingCartsService {
  constructor(
    @Inject('SHOPPING_CART_REPOSITORY')
    private shoppingCartRepository: Repository<ShoppingCart>,
  ) {}

  create() {
    return 'This action adds a new cart';
  }

  async findAll(): Promise<ShoppingCart[]> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await this.shoppingCartRepository.find());
      } catch (error) {
        reject(error);
      }
    });
  }

  update(id: number, updateShoppingCartDto: UpdateShoppingCartDto) {
    return updateShoppingCartDto;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
