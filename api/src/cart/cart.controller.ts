import { Controller, Post, Body, Param, UseGuards, Get } from '@nestjs/common';
import { CartService } from './cart.service';
import { BookDTO, CartBookDTO } from 'src/models/book.model';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.decorator';
import { UserEntity } from 'src/entities/user.entity';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post(':bookId')
  @UseGuards(AuthGuard())
  addToCart(@Param('bookId') bookId: number, @User() { username }: UserEntity) {
    this.cartService.addToCart(bookId, username);
  }

  @Get(':owner')
  GetBooksFromCart(@Param('owner') owner: string) {
    return this.cartService.getCartBooks(owner);
  }
}
