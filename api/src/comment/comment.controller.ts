import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDTO } from 'src/models/comment.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get(':bookId')
  getAllCommentsByBookId(@Param('bookId') bookId: number) {
    return this.commentService.getAllComments(bookId);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  addComment(@Body(ValidationPipe) comment: CommentDTO) {
    return this.commentService.addComment(comment);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delComment(@Param('id') id: number) {
    return this.commentService.delComment(id);
  }

  @Delete('all/:bookId')
  @UseGuards(AuthGuard('jwt'))
  delComments(@Param('bookId') bookId: number) {
    return this.commentService.delCommentsByBookId(bookId);
  }
}
