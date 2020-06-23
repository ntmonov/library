import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() deleted = new EventEmitter<Book>();
  constructor(
    private bookService: BookService,
    private toastr: ToastrService,
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book).subscribe(
      (data) => {
        this.toastr.success('Book deleted');
        this.deleted.emit(book);
      },
      (err) => {
        this.toastr.error(err.error.message);
      }
    );
  }

  isAdmin(): boolean {
    return this.authService.getIsAdmin();
  }

  addToCart() {
    let total = +sessionStorage.getItem('total') || 0;
    this.cartService.addToCart(this.book).subscribe(
      (b) => {
        total += b.price;
        sessionStorage.setItem('total', total.toString());
      },
      (err) => {
        this.toastr.error(err.error.message);
      }
    );
  }
}
