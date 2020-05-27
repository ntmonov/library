import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book, BookInCart } from 'src/app/models/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  addToCart(book: Book): Observable<Book> {
    const headers = new HttpHeaders({
      Authorization: 'Token ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    });
    return this.http.post<Book>(
      `http://localhost:3000/api/cart/${book.id}`,
      book,
      {
        headers,
      }
    );
  }

  getCartItems(owner: string): Observable<BookInCart[]> {
    return this.http.get<BookInCart[]>(
      `http://localhost:3000/api/cart/${owner}`
    );
  }

  getTotalPrice(owner: string): Observable<number> {
    return this.http.get<number>(
      `http://localhost:3000/api/cart/total/${owner}`
    );
  }
}
