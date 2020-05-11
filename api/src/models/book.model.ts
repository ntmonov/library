import { IsString, IsNumber } from 'class-validator';

export class BookDTO {
  @IsNumber()
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

export class CartBookDTO extends BookDTO {
  @IsNumber()
  qunatity: number;
}
