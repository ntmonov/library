import { BookEntity } from './book.entity';
import { Column, Entity, ViewColumn } from 'typeorm';
import { IsString } from 'class-validator';

@Entity('favorites')
export class FavoriteBookEntity extends BookEntity {
  @Column()
  @IsString()
  owner: string;
}
