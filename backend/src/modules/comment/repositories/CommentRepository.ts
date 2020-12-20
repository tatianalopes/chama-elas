import ICreateCommentDto from "../dtos/ICreateCommentDto";
import ICommentRepository from "./ICommentRepository";
import CommentModel, { Comment } from "./entities/Comment";

class CommentRepository implements ICommentRepository {

  public async create(data: ICreateCommentDto): Promise<Comment> {
    return CommentModel.create(data);
  }

  public async findByProfessionalId(professionalId: string): Promise<Comment[]> {
    return CommentModel.find({ professionalId });
  }
}

export default CommentRepository;

