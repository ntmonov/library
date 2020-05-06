import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book, FavBook } from '../models/Book';

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
    const headers = new HttpHeaders({
      Authorization: 'Token ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    });

    return this.http.post<Book>('http://localhost:3000/api/books', book, {
      headers,
    });
  }

  deleteBook(book: Book) {
    const headers = new HttpHeaders({
      Authorization: 'Token ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    });

    return this.http.delete(
      `http://localhost:3000/api/books/${book.id}/${book.creator}`,
      {
        headers,
      }
    );
  }

  updateBook(book: Book) {
    const headers = new HttpHeaders({
      Authorization: 'Token ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    });
    return this.http.put(
      `http://localhost:3000/api/books/${book.id}/${book.creator}`,
      book,
      { headers }
    );
  }

  addToFav(book: FavBook): Observable<FavBook> {
    return this.http.post<FavBook>('http://localhost:3000/api/favBooks', book);
  }
}
