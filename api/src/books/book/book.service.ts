import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from 'src/entities/book.entity';
import { Repository } from 'typeorm';
import { BookDTO } from 'src/models/book.model';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity) private bookRepo: Repository<BookEntity>,
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
}
