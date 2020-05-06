import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from 'src/entities/book.entity';
import { Repository } from 'typeorm';
import { BookDTO, FavoriteBookDTO } from 'src/models/book.model';
import { FavoriteBookEntity } from 'src/entities/favBook.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity) private bookRepo: Repository<BookEntity>,
    @InjectRepository(FavoriteBookEntity)
    private favBookRepo: Repository<FavoriteBookEntity>,
  ) {}

  async getAllBooks() {
    const books = await this.bookRepo.find();
    return books;
  }

  async getBook(bookId: number) {
    const book = await this.bookRepo.findOne(bookId);
    return book;
  }

  async addBook(book: BookDTO) {
    const b = await this.bookRepo.insert(book);
    return b;
  }

  async deleteBook(bookId: number, creator: string, username: string) {
    if (creator !== username) {
      throw new UnauthorizedException('Unauthorized');
    }
    await this.bookRepo.delete(bookId);
  }

  async updateBook(
    bookId: number,
    creator: string,
    username: string,
    book: BookDTO,
  ) {
    if (creator !== username) {
      throw new UnauthorizedException('Unauthorized');
    }
    await this.bookRepo.update(bookId, book);
  }

  async addToFavorites(book: FavoriteBookDTO) {
    const bookInDB = this.favBookRepo.findOne(book['id']);
    if (bookInDB) {
      throw new ConflictException('Book allready exists');
    }
    const b = await this.favBookRepo.insert(book);
    return b;
  }
}
