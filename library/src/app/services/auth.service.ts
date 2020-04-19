import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/users', user);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/users/login', user);
  }
}
