import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from 'src/entities/cart.entity';
import { Repository } from 'typeorm';
import { CartBookDTO } from 'src/models/book.model';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity) private cartRepo: Repository<CartEntity>,
  ) {}

  async addToCart(bookId: number, book: CartBookDTO) {
    const b = await this.cartRepo.findOne({ where: { bookId } });
    if (b) {
      b.quantity++;
      return await this.cartRepo.update({ id: b.id }, b);
    }
    book['bookId'] = bookId;
    return await this.cartRepo.save(book);
  }
}
