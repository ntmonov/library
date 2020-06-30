import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css'],
})
export class SearchBookComponent implements OnInit {
  @Output() searchBook = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  search(sch) {
    if (sch === '') {
      return;
    }
    this.searchBook.emit(sch);
  }
}
