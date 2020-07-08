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

  addComment(comment): Observable<Comment> {
    return this.http.post<Comment>(
      'http://localhost:3000/api/comment',
      comment
    );
  }

  delComment(commentId: number) {
    return this.http.delete(`http://localhost:3000/api/comment/${commentId}`);
  }

  delCommentsByBookId(bookId: number) {
    return this.http.delete(`http://localhost:3000/api/comment/all/${bookId}`);
  }
}
