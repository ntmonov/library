import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book, FavBook } from 'src/app/models/Book';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data) => (this.books = data));
  }

  delBook(book: Book) {
    this.books = this.books.filter((b) => b['id'] !== book['id']);
  }
}
