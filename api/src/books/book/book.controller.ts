import {
  Controller,
  Get,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Delete,
  Param,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDTO } from 'src/models/book.model';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.decorator';
import { UserEntity } from 'src/entities/user.entity';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Post()
  @UseGuards(AuthGuard())
  addBook(@Body(ValidationPipe) book: BookDTO) {
    return this.bookService.addBook(book);
  }

  @Delete(':bookId')
  @UseGuards(AuthGuard())
  deleteBook(@Param('bookId') bookId: number) {
    this.bookService.deleteBook(bookId);
  }
}
