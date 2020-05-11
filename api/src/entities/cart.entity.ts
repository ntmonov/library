import { BookEntity } from './book.entity';
import { Column, Entity } from 'typeorm';
import { IsNumber } from 'class-validator';

@Entity('cart')
export class CartEntity extends BookEntity {
  @Column({ default: 1 })
  @IsNumber()
  quantity: number;

  @Column({ default: 1 })
  @IsNumber()
  bookId: number;
}
