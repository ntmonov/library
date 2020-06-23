import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  constructor() {}

  ngOnInit(): void {}
}
