import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from 'src/models/book.model';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Post()
  addBook(@Body(ValidationPipe) book: BookDTO) {
    return this.bookService.addBook(book);
  }
}
