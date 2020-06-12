import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookInCart } from 'src/app/models/Book';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/Cart';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Cart;
  @Output() onDelete = new EventEmitter<Cart>();

  book: BookInCart;
  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const owner = this.authService.getUsername();
    this.cartService
      .getBookFromCart(this.cartItem.bookId, owner)
      .subscribe((data) => (this.book = data));
  }

  deleteItem(item: BookInCart) {
    const owner = this.authService.getUsername();
    this.cartService.deleteBookFromCart(owner, item.id).subscribe();
    this.cartService.getTotalPrice().subscribe((total) => {
      sessionStorage.setItem('total', total.toString());
      this.onDelete.emit(this.cartItem);
    });
  }

  changeQty(sign) {
    if (sign === '+') {
      let total = +sessionStorage.getItem('total') || 0;
      this.cartService.addToCart(this.book).subscribe(
        (b) => {
          total += b.price;
          this.book.quantity++;
          sessionStorage.setItem('total', total.toString());
        },
        (err) => {
          this.toastr.error(err.error.message);
        }
      );
    } else {
      let total = +sessionStorage.getItem('total');
      this.cartService.decQty(this.book.id).subscribe((cartItem) => {
        this.cartService
          .getBookFromCart(cartItem.bookId, cartItem.owner)
          .subscribe((b) => {
            total -= b.price;
            this.book.quantity--;
            sessionStorage.setItem('total', total.toString());
            if (this.book.quantity <= 0) {
              this.cartService
                .deleteBookFromCart(cartItem.owner, cartItem.bookId)
                .subscribe((data) => {
                  sessionStorage.setItem('total', total.toString());
                  this.onDelete.emit(this.cartItem);
                });
            }
          });
      });
    }
  }
}
