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

  async addBook(book: BookDTO, isAdmin: boolean) {
    if (!isAdmin) throw new UnauthorizedException('Admin only');
    const b = await this.bookRepo.insert(book);
    return b;
  }

  async deleteBook(bookId: number, isAdmin: boolean) {
    if (!isAdmin) {
      return new UnauthorizedException('Admin only');
    }
    await this.bookRepo.delete(bookId);
  }

  async updateBook(bookId: number, book: BookDTO, isAdmin: boolean) {
    if (!isAdmin) {
      throw new UnauthorizedException('Admin only');
    }
    await this.bookRepo.update(bookId, book);
  }
}
