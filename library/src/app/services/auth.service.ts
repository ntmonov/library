import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  saveSession(user: User) {
    sessionStorage.setItem('username', user.user.username);
    sessionStorage.setItem('token', user.user.token);
  }

  isAuthenticated() {
    return sessionStorage.getItem('token') !== null;
  }

  register(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/users', user);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/users/login', user);
  }

  GetIsAdmin(): boolean {
    if (sessionStorage.getItem('token') === null) return false;
    let jwtData = sessionStorage.getItem('token').split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    return decodedJwtData.isAdmin;
  }
}
