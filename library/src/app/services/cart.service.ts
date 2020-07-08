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
    return this.http.post<Book>(
      `http://localhost:3000/api/cart/add/${book.id}`,
      book
    );
  }

  getCartItems(owner: string): Observable<Cart[]> {
    return this.http.get<Cart[]>(`http://localhost:3000/api/cart/${owner}`);
  }

  getBookFromCart(id: number, owner: string): Observable<BookInCart> {
    return this.http.get<BookInCart>(
      `http://localhost:3000/api/cart/book/${owner}/${id}`
    );
  }

  deleteBookFromCart(owner: string, bookId: number) {
    return this.http.delete(
      `http://localhost:3000/api/cart/del/${owner}/${bookId}`
    );
  }

  getTotalPrice(): Observable<number> {
    return this.http.get<number>(`http://localhost:3000/api/cart/total`);
  }

  decQty(bookId: number): Observable<Cart> {
    return this.http.post<Cart>(
      `http://localhost:3000/api/cart/decQty/${bookId}`,
      {}
    );
  }
}
