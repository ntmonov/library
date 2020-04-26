import { Injectable } from '@nestjs/common';
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

  async addBook(book: BookDTO) {
    const b = await this.bookRepo.insert(book);
    return b;
  }
}
