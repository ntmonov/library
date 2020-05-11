import { IsString } from 'class-validator';

export class BookDTO {
  @IsString()
  author: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;
}
