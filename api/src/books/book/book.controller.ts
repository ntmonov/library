import {
  Controller,
  Get,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Delete,
  Param,
  Put,
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

  @Get(':bookId')
  getBook(@Param('bookId') booId: number) {
    return this.bookService.getBook(booId);
  }

  @Post()
  @UseGuards(AuthGuard())
  addBook(
    @Body(ValidationPipe) book: BookDTO,
    @User() { isAdmin }: UserEntity,
  ) {
    return this.bookService.addBook(book, isAdmin);
  }

  @Delete(':bookId')
  @UseGuards(AuthGuard())
  deleteBook(@Param('bookId') bookId: number, @User() { isAdmin }: UserEntity) {
    return this.bookService.deleteBook(bookId, isAdmin);
  }

  @Put(':bookId')
  @UseGuards(AuthGuard())
  updateBook(
    @Param('bookId') bookId: number,
    @User() { isAdmin }: UserEntity,
    @Body() book: BookDTO,
  ) {
    return this.bookService.updateBook(bookId, book, isAdmin);
  }
}
