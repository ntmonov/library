import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data) => (this.books = data));
  }

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId).subscribe(
      (data) => {
        this.books = this.books.filter((b) => b.id !== bookId);
      },
      (err) => console.log(err)
    );
  }
}
