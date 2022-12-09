import { categoryEnum } from "src/utils/products.enum";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'Products'})
export class Product {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({length: 100})
    name: string;

    @Column('float')
    value: number;

    @Column({length: 255})
    description: string;

    @Column('bool')
    available: boolean;

    @Column('int')
    category: categoryEnum;
}
