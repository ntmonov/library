import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addd-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  addBookForm = new FormGroup({
    author: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    imageUrl: new FormControl(''),
    creator: new FormControl({
      value: sessionStorage.getItem('username'),
      disabled: true,
    }),
  });

  get author() {
    return this.addBookForm.get('author');
  }

  get title() {
    return this.addBookForm.get('title');
  }

  addBook() {}
}
