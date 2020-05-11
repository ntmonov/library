import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/Book';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  book: Book;
  bookId: number;
  editBookForm = new FormGroup({
    author: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    imageUrl: new FormControl(''),
  });

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.bookId = +params.get('bookId');
      this.bookService.getBook(this.bookId).subscribe((data) => {
        this.book = data;
        this.getForm();
      });
    });
  }

  getForm() {
    this.editBookForm = new FormGroup({
      author: new FormControl(this.book.author, [Validators.required]),
      title: new FormControl(this.book.title, [Validators.required]),
      description: new FormControl(this.book.description),
      imageUrl: new FormControl(this.book.imageUrl),
    });
  }

  get author() {
    return this.editBookForm.get('author');
  }

  get title() {
    return this.editBookForm.get('title');
  }

  editBook() {
    this.editBookForm.value['id'] = this.bookId;
    this.bookService.updateBook(this.editBookForm.value).subscribe(
      (data) => {
        this.toastr.success('Book updated');
        this.router.navigateByUrl('books');
      },
      (err) => this.toastr.error(err.error.message)
    );
  }
}
