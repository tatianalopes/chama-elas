import { Comment } from "../repositories/entities/Comment";

export default interface ICreateCommentDto {
  professionalId: Comment['professionalId'];
  userName: Comment['name'];
  userAvatar?: Comment['avatar'];
  comment: Comment['comment'];
}
