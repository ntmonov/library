import { Component, OnInit, Input } from '@angular/core';
import { BookInCart } from 'src/app/models/Book';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: BookInCart;
  constructor() {}

  ngOnInit(): void {}
}
