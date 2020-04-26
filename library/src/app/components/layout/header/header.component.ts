import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    sessionStorage.clear();
  }

  checkIfLogged() {
    return this.authService.isAuthenticated();
  }

  get username(): string {
    return sessionStorage.getItem('username');
  }
}
