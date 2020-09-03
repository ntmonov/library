import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { DatabaseConnectionService } from './database-connection.service';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './books/book/book.module';
import { CartModule } from './cart/cart.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    MailerModule.forRoot({
      transport: 'smtps://ntm@mail.bg:nik6806@smtp.mail.bg',
    }),
    CartModule,
    AuthModule,
    BookModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
