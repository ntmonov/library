import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book, BookInCart } from 'src/app/models/Book';
import { Observable } from 'rxjs';
import { Cart } from '../models/Cart';

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
      `http://localhost:3000/api/cart/add/${book.id}`,
      book,
      {
        headers,
      }
    );
  }

  getCartItems(owner: string): Observable<Cart[]> {
    const headers = new HttpHeaders({
      Authorization: 'Token ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    });
    return this.http.get<Cart[]>(`http://localhost:3000/api/cart/${owner}`, {
      headers,
    });
  }

  getBookFromCart(id: number, owner: string): Observable<BookInCart> {
    const headers = new HttpHeaders({
      Authorization: 'Token ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    });
    return this.http.get<BookInCart>(
      `http://localhost:3000/api/cart/book/${owner}/${id}`,
      { headers }
    );
  }

  deleteBookFromCart(owner: string, bookId: number) {
    const headers = new HttpHeaders({
      Authorization: 'Token ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    });
    return this.http.delete(
      `http://localhost:3000/api/cart/del/${owner}/${bookId}`,
      { headers }
    );
  }

  getTotalPrice(): Observable<number> {
    const headers = new HttpHeaders({
      Authorization: 'Token ' + sessionStorage.getItem('token'),
      'Content-Type': 'text/plain',
    });
    return this.http.get<number>(`http://localhost:3000/api/cart/total`, {
      headers,
    });
  }

  decQty(bookId: number): Observable<Cart> {
    const headers = new HttpHeaders({
      Authorization: 'Token ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    });
    return this.http.post<Cart>(
      `http://localhost:3000/api/cart/decQty/${bookId}`,
      {},
      {
        headers,
      }
    );
  }
}
