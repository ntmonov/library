import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../../models/Comment';
import { CommentService } from 'src/app/services/comment.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment: Comment;
  @Output() delComment = new EventEmitter<number>();

  constructor(
    private commentService: CommentService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  deleteComment(comment: Comment) {
    this.commentService
      .delComment(comment.id)
      .subscribe((data) => this.delComment.emit(comment.id));
  }

  isAuthor(comment: Comment) {
    return this.authService.getUsername() === comment.author;
  }
}
