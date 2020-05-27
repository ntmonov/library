import { Controller, Post, Body, Param, UseGuards, Get } from '@nestjs/common';
import { CartService } from './cart.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.decorator';
import { UserEntity } from 'src/entities/user.entity';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post(':bookId')
  @UseGuards(AuthGuard())
  addToCart(@Param('bookId') bookId: number, @User() { username }: UserEntity) {
    return this.cartService.addToCart(bookId, username);
  }

  @Get(':owner')
  GetBooksFromCart(@Param('owner') username: string) {
    return this.cartService.getCartBooks(username);
  }

  @Get('total/:owner')
  getTotalPrice(@Param('owner') username: string) {
    return this.cartService.getTotalCartPrice(username);
  }
}
