import { IsString } from 'class-validator';

export class CommentDTO {
  id: number;

  bookId: number;

  @IsString()
  author: string;

  @IsString()
  body: string;
}
