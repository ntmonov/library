import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BookComponent } from './book/book.component';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    EditBookComponent,
    BookComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BookRoutingModule,
  ],
})
export class BookModule {}
