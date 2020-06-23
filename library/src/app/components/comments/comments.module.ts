import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentItemComponent } from './comment-item/comment-item.component';

@NgModule({
  declarations: [CommentsComponent, AddCommentComponent, CommentItemComponent],
  imports: [CommonModule],
  exports: [CommentsComponent, AddCommentComponent],
})
export class CommentsModule {}
