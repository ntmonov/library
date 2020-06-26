import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { AuthService } from 'src/app/services/auth.service';
import { Comment } from '../../../models/Comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent implements OnInit {
  @Input() bookId: number;
  @Output() insertComment = new EventEmitter<Comment>();

  constructor(
    private commentService: CommentService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  addComment(body: string) {
    const comment = {
      bookId: this.bookId,
      body,
      author: this.authService.getUsername(),
    };
    this.commentService.addComment(comment).subscribe((data) => {
      this.insertComment.emit(data);
    });
  }
}
