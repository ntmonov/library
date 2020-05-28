import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart[];
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const owner = this.authService.getUsername();
    this.cartService.getCartItems(owner).subscribe((data) => {
      this.cart = data;
    });
  }

  deleteCartItem(cartItem: Cart) {
    this.cart = this.cart.filter((c) => c.id !== cartItem.id);
  }
}
