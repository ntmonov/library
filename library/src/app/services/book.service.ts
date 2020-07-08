import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/api/books');
  }

  getBook(bookId: number): Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/api/books/${bookId}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:3000/api/books', book);
  }

  deleteBook(book: Book) {
    return this.http.delete(`http://localhost:3000/api/books/${book.id}`);
  }

  updateBook(book: Book) {
    return this.http.put(`http://localhost:3000/api/books/${book.id}`, book);
  }
}
