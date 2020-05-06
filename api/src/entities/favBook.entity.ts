import { BookEntity } from './book.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IsString } from 'class-validator';
import { AbstractEntity } from './abstract-entity';

@Entity('favorites')
export class FavoriteBookEntity extends AbstractEntity {
  @Column()
  @IsString()
  author: string;

  @Column()
  @IsString()
  title: string;

  @Column({ default: '' })
  @IsString()
  description: string;

  @Column({
    default:
      'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg',
  })
  @IsString()
  imageUrl: string;

  @Column()
  @IsString()
  creator: string;

  @Column()
  @IsString()
  @PrimaryColumn()
  owner: string;
}
