import { injectable, inject } from 'tsyringe';
import { Comment } from '../repositories/entities/Comment';
import ICommentRepository from '../repositories/ICommentRepository';

interface IRequest {
  professionalId: string;
}

@injectable()
class ListProfessionalCommentsService {
  constructor(
    @inject('CommentRepository')
    private commentRepository: ICommentRepository,
  ) {}

  public async execute({ professionalId }: IRequest): Promise<Comment[]> {
    const comments = await this.commentRepository.findByProfessionalId(professionalId);

    return comments;
  }
}

export default ListProfessionalCommentsService;
