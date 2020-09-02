import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from 'src/entities/comment.entity';
import { Repository } from 'typeorm';
import { CommentDTO } from 'src/models/comment.model';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepo: Repository<CommentEntity>,
  ) {}

  async getAllComments(bookId: number) {
    const comments = await this.commentRepo.find({ bookId });
    return comments;
  }

  async addComment(comment: CommentDTO) {
    if (comment.body.length > 255)
      throw new InternalServerErrorException('Max 255 chars');
    const c = await this.commentRepo.save(comment);
    return c;
  }

  async delComment(id: number) {
    await this.commentRepo.delete({ id });
  }

  async delCommentsByBookId(bookId: number) {
    await this.commentRepo.delete({ bookId });
  }
}
