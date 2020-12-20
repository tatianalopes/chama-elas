import ICreateCommentDto from "../dtos/ICreateCommentDto";
import { Comment } from "./entities/Comment";

export default interface ICommentRepository {
  create(data: ICreateCommentDto): Promise<Comment>;
  findByProfessionalId(professionalId: string): Promise<Comment[]>;
}
