import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCommentService from '@modules/comment/services/CreateCommentService';
import ListProfessionalCommentsService from '@modules/comment/services/ListProfessionalCommentsService';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const commentInfo = {
      professionalId: request.body.professionalId,
      userName: request.body.userName,
      userAvatar: request.body.userAvatar,
      comment: request.body.comment,
    };

    const createComment = container.resolve(CreateCommentService);
    const createdComment = await createComment.execute(commentInfo);

    return response.json(createdComment);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { professionalId } = request.params;

    const listComments = container.resolve(ListProfessionalCommentsService);
    const comments = await listComments.execute({ professionalId });

    return response.json(comments);
  }
}
