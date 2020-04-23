import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book.component';

@NgModule({
  declarations: [BookComponent],
  imports: [CommonModule, HttpClientModule],
})
export class BookModule {}
