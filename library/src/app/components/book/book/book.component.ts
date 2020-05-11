import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  constructor(
    private bookService: BookService,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  addToFav(book: Book) {}

  deleteBook(book: Book) {}

  isAdmin(): boolean {
    return this.authService.getIsAdmin();
  }
}
