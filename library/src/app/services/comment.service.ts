import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
