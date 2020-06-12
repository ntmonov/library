import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from 'src/entities/cart.entity';
import { Repository } from 'typeorm';
import { BookService } from 'src/books/book/book.service';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity) private cartRepo: Repository<CartEntity>,
    private bookService: BookService,
  ) {}

  async addToCart(bookId: number, username: string) {
    const b = await this.cartRepo.findOne({ bookId, owner: username });
    if (b) {
      b.quantity++;
      const cartItem = await this.cartRepo.save({
        ...b,
        b,
      });
      const bk = await this.bookService.getBook(cartItem.bookId);
      return bk;
    } else {
      let book = new CartEntity();
      book.bookId = bookId;
      book.owner = username;
      book.quantity = 1;
      const cartItem = await this.cartRepo.save(book);
      const bk = await this.bookService.getBook(cartItem.bookId);
      return bk;
    }
  }

  async getCartBook(owner: string, bookId: number) {
    const cartItem = await this.cartRepo.findOne({ bookId, owner });
    const book = await this.bookService.getBook(cartItem.bookId);
    book['quantity'] = cartItem.quantity;
    return book;
  }

  async getCartItems(owner: string) {
    const items = await this.cartRepo.find({ owner });
    return items;
  }

  async deletBookFromCart(owner: string, bookId: number) {
    return this.cartRepo.delete({ owner, bookId });
  }

  async getTotalCartPrice(owner: string) {
    let total: number = 0;
    let items = await this.getCartItems(owner);
    for (let i of items) {
      let book = await this.getCartBook(owner, i.bookId);
      total += book.price * book['quantity'];
    }
    return total;
  }

  async decQty(bookId: number, owner: string) {
    const book = await this.cartRepo.findOne({ bookId, owner });
    book.quantity--;
    return await this.cartRepo.save(book);
  }
}
