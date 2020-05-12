import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from 'src/entities/cart.entity';
import { AuthModule } from 'src/auth/auth.module';
import { BookService } from 'src/books/book/book.service';
import { BookEntity } from 'src/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, BookEntity]), AuthModule],
  providers: [CartService, BookService],
  controllers: [CartController],
})
export class CartModule {}
