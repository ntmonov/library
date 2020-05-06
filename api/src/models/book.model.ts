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

  @IsString()
  creator: string;
}

export class FavoriteBookDTO extends BookDTO {
  @IsString()
  owner: string;
}
