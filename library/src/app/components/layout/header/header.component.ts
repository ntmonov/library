import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  logout() {
    sessionStorage.clear();
    this.toastr.success('Logout successfull');
  }

  checkIfLogged() {
    return this.authService.isAuthenticated();
  }

  get username(): string {
    return this.authService.getUsername();
  }

  get getCount(): number {
    return +sessionStorage.getItem('favCount');
  }

  isAdmin(): boolean {
    return this.authService.getIsAdmin();
  }

  get totalPrice(): number {
    return +sessionStorage.getItem('total') || 0;
  }
}
