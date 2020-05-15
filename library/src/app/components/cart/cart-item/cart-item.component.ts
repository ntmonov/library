import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Book;
  constructor() {}

  ngOnInit(): void {}
}
