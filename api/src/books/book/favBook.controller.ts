import { BookService } from './book.service';
import {
  Body,
  ValidationPipe,
  Controller,
  Post,
  Get,
  UseGuards,
} from '@nestjs/common';
import { FavoriteBookDTO } from 'src/models/book.model';
import { User } from 'src/auth/user.decorator';
import { UserEntity } from 'src/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('favBooks')
export class FavoriteBookController {
  constructor(private bookService: BookService) {}

  @Post()
  @UseGuards(AuthGuard())
  addFavBook(
    @Body(ValidationPipe) book: FavoriteBookDTO,
    @User() { username }: UserEntity,
  ) {
    return this.bookService.addToFavorites(book, username);
  }

  @Get('countOfBooks')
  @UseGuards(AuthGuard())
  getCount(@User() { username }: UserEntity) {
    console.warn(username);
    return this.bookService.getFavCount(username);
  }
}
