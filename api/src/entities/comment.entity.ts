import { AbstractEntity } from './abstract-entity';
import { Entity, Column } from 'typeorm';
import { IsString, IsNumber } from 'class-validator';
import { classToPlain } from 'class-transformer';

@Entity('comments')
export class CommentEntity extends AbstractEntity {
  @Column()
  @IsNumber()
  bookId: number;

  @Column()
  @IsString()
  author: string;

  @Column()
  @IsString()
  body: string;

  toJSON() {
    return classToPlain(this);
  }
}
