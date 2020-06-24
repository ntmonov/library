import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getCommentsByBookId(bookId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `http://localhost:3000/api/comment/${bookId}`
    );
  }

  addComment(comment) {
    const headers = new HttpHeaders({
      Authorization: 'Token ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json',
    });
    return this.http.post('http://localhost:3000/api/comment', comment, {
      headers,
    });
  }
}
