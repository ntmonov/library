import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from 'src/entities/cart.entity';
import { Repository } from 'typeorm';
import { BookDTO } from 'src/models/book.model';
import { BookService } from 'src/books/book/book.service';
import { BookEntity } from 'src/entities/book.entity';
import { json } from 'express';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity) private cartRepo: Repository<CartEntity>,
    private bookService: BookService,
  ) {}

  async addToCart(bookId: number, username: string) {
    const b = await this.cartRepo.findOne({ bookId, owner: username });
    console.log(b);
    if (b) {
      b.quantity++;
      return this.cartRepo.save({
        ...b,
        b,
      });
    } else {
      let book = new CartEntity();
      book.bookId = bookId;
      book.owner = username;
      book.quantity = 1;
      return await this.cartRepo.save(book);
    }
  }

  async getCartBooks(owner: string) {
    let books: Array<BookEntity> = [];
    let cartItems = await this.cartRepo.find({ where: { owner } });
    for (let c of cartItems) {
      const book = await this.bookService.getBook(c.bookId);
      book['quantity'] = c.quantity;
      books.push(book);
    }
    return books;
  }

  async getTotalCartPrice(owner) {
    const books = await this.getCartBooks(owner);
    let total: number = 0;
    books.forEach(b => (total += b.price));
    return total;
  }
}
