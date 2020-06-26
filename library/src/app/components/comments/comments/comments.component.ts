import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit, OnChanges {
  @Input() bookId: number;
  @Input() cmt: Comment;

  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cmt.currentValue) {
      this.comments.push(changes.cmt.currentValue);
    }
  }

  ngOnInit(): void {
    this.commentService.getCommentsByBookId(this.bookId).subscribe((c) => {
      this.comments = c;
    });
  }
}
