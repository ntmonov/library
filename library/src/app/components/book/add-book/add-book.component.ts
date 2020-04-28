import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addd-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  addBookForm = new FormGroup({
    author: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    imageUrl: new FormControl(''),
    creator: new FormControl(sessionStorage.getItem('username')),
  });

  get author() {
    return this.addBookForm.get('author');
  }

  get title() {
    return this.addBookForm.get('title');
  }

  addBook() {
    this.bookService.addBook(this.addBookForm.value).subscribe(
      (data) => {
        this.router.navigateByUrl('books');
      },
      (err) => {
        this.toastr.error(err.error.message);
      }
    );
  }
}
