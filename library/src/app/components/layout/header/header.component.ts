import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService
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
    return sessionStorage.getItem('username');
  }

  get getCount(): number {
    return +sessionStorage.getItem('favCount');
  }
}
