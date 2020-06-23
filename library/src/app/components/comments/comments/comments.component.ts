import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/models/Comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() bookId: number;
  comments: Comment[] = [];
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getCommentsByBookId(this.bookId).subscribe((c) => {
      this.comments = c;
    });
  }
}
