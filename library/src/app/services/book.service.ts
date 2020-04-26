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

  addBook(book: Book): Observable<Book> {
    const headers = new HttpHeaders({
      Authorization: 'Token ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    });

    return this.http.post<Book>('http://localhost:3000/api/books', book, {
      headers,
    });
  }
}
