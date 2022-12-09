import { Product } from "src/products/entities/product.entity";

export class Cart {
    user: number;
    total: number;
    products: Product[];
}
