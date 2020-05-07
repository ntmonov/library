import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book, FavBook } from 'src/app/models/Book';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data) => (this.books = data));
  }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book).subscribe(
      (data) => {
        this.books = this.books.filter((b) => b.id !== book.id);
        this.toastr.success('Book deleted');
      },
      (err) => this.toastr.error(err.error.message)
    );
  }

  isAuthor(book: Book) {
    return book.creator === sessionStorage.getItem('username');
  }

  async addToFav(book: FavBook) {
    book['owner'] = sessionStorage.getItem('username');
    this.bookService.addToFav(book).subscribe(
      () => {
        this.toastr.success('Book successfully added to favorites');
        this.bookService.getFavCount().subscribe(
          (count) => {
            sessionStorage.setItem('favCount', count.toString());
          },
          (err) => this.toastr.error(err.error.message)
        );
      },
      (err) => this.toastr.error(err.error.message)
    );
  }

  search(item, criteria): void {
    this.books = this.books.filter((b) =>
      this.checkIfMatches(b, item, criteria)
    );
  }

  reset(): void {
    this.bookService.getAllBooks().subscribe((data) => (this.books = data));
  }

  checkIfMatches(b: Book, item: string, criteria: string): boolean {
    const regex = new RegExp(`.*${item}.*`);
    if (criteria === 'title') {
      return regex.test(b.title);
    } else {
      return regex.test(b.author);
    }
  }
}
