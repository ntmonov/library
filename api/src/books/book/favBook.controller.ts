import { BookService } from './book.service';
import { Body, ValidationPipe, Controller, Post } from '@nestjs/common';
import { FavoriteBookDTO } from 'src/models/book.model';

@Controller('favBooks')
export class FavoriteBookController {
  constructor(private bookService: BookService) {}

  @Post()
  addFavBook(@Body(ValidationPipe) book: FavoriteBookDTO) {
    return this.bookService.addToFavorites(book);
  }
}
