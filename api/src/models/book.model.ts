import { IsString, IsNumber } from 'class-validator';

export class BookDTO {
  bookId: number;

  @IsString()
  author: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;
}

export class CartBookDTO {
  @IsNumber()
  qunatity: number;

  @IsString()
  owner: string;

  @IsNumber()
  bookId: number;
}
