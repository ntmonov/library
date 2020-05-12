import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from 'src/entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity) private cartRepo: Repository<CartEntity>,
  ) {}

  async addToCart(bookId: number, username: string) {
    const b = await this.cartRepo.findOne({ bookId, owner: username });
    console.log(b);
    if (b) {
      b.quantity++;
      return await this.cartRepo.update({ id: b.id }, b);
    } else {
      let book = new CartEntity();
      book.bookId = bookId;
      book.owner = username;
      book.quantity = 1;
      return await this.cartRepo.save(book);
    }
  }
}
