import { Component, OnInit, Input } from '@angular/core';
import { BookInCart } from 'src/app/models/Book';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/Cart';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Cart;
  book: BookInCart;
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const owner = this.authService.getUsername();
    this.cartService
      .getBookFromCart(this.cartItem.bookId, owner)
      .subscribe((data) => (this.book = data));
  }

  deleteItem(item: BookInCart) {
    const owner = this.authService.getUsername();
    this.cartService
      .deleteBookFromCart(owner, item.id)
      .subscribe((data) => console.log(data));
  }
}
