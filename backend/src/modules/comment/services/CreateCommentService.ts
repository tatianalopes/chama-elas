import { injectable, inject } from 'tsyringe';

import { Comment } from '../repositories/entities/Comment';
import ICommentRepository from '../repositories/ICommentRepository';

interface IRequest {
  professionalId: string;
  userName: string;
  userAvatar?: string;
  comment: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('CommentRepository')
    private commentRepository: ICommentRepository,
  ) {}

  public async execute({ professionalId, userName, userAvatar, comment }: IRequest): Promise<Comment> {
    const createdComment = await this.commentRepository.create({
      professionalId,
      userName,
      userAvatar,
      comment
    });

    return createdComment;
  }
}

export default CreateUserService;
