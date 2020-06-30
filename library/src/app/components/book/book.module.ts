import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookComponent } from './book/book.component';
import { BookRoutingModule } from './book-routing.module';
import { CommentsModule } from '../comments/comments.module';
import { SearchBookComponent } from './search-book/search-book.component';

@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    EditBookComponent,
    BookComponent,
    SearchBookComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BookRoutingModule,
    CommentsModule,
  ],
})
export class BookModule {}
