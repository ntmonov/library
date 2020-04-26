import { AbstractEntity } from './abstract-entity';
import { Entity, Column } from 'typeorm';
import { IsString } from 'class-validator';

@Entity('books')
export class BookEntity extends AbstractEntity {
  @Column({ unique: true })
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
}
