import { Controller, Post, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { BookDTO, CartBookDTO } from 'src/models/book.model';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post(':bookId')
  addToCart(@Param('bookId') bookId: number, @Body() book: CartBookDTO) {
    return this.cartService.addToCart(bookId, book);
  }
}
