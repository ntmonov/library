import { Controller, Get, Param } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get(':bookId')
  getAllCommentsByBookId(@Param('bookId') bookId: number) {
    return this.commentService.getAllComments(bookId);
  }
}
