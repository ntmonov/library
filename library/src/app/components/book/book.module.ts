import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookComponent, AddBookComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
})
export class BookModule {}
