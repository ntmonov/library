import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString } from 'class-validator';
import { AbstractEntity } from './abstract-entity';

@Entity('cart')
export class CartEntity extends AbstractEntity {
  @Column()
  @IsNumber()
  quantity: number;

  @Column()
  @IsNumber()
  bookId: number;

  @Column()
  @IsString()
  owner: string;
}
