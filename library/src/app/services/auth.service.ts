import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: RegisterUser): Observable<RegisterUser> {
    return this.http.post<RegisterUser>(
      'http://localhost:3000/api/users',
      user
    );
  }
}
