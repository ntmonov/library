import {
  Controller,
  Post,
  Body,
  Param,
  UseGuards,
  Get,
  Delete,
} from '@nestjs/common';
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

  @Get('book/:owner/:bookId')
  getBookFromCart(
    @Param('owner') owner: string,
    @Param('bookId') bookId: number,
  ) {
    return this.cartService.getCartBook(owner, bookId);
  }

  @Get(':owner')
  getCartItems(@Param('owner') owner: string) {
    return this.cartService.getCartItems(owner);
  }

  @Delete(':owner/:bookId')
  deleteBookFromCart(
    @Param('owner') owner: string,
    @Param('bookId') bookId: number,
  ) {
    return this.cartService.deletBookFromCart(owner, bookId);
  }

  @Get('total/:owner')
  getTotalPrice(@Param('owner') owner: string) {
    return this.cartService.getTotalCartPrice(owner);
  }
}
