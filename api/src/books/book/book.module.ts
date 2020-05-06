import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from 'src/entities/book.entity';
import { AuthModule } from 'src/auth/auth.module';
import { FavoriteBookEntity } from 'src/entities/favBook.entity';
import { FavoriteBookController } from './favBook.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookEntity, FavoriteBookEntity]),
    AuthModule,
  ],
  providers: [BookService],
  controllers: [BookController, FavoriteBookController],
})
export class BookModule {}
