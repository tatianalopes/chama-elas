import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import ensureAuthenticated from '@modules/user/middlewares/ensureAuthenticated';

import CommentController from '../controllers/CommentController';

const commentRouter = Router();
const commentController = new CommentController();

commentRouter.post(
  '/',
  ensureAuthenticated,
  celebrate({
    [Segments.BODY]: {
      professionalId: Joi.string().required(),
      userName: Joi.string().required(),
      userAvatar: Joi.string(),
      comment: Joi.string().required(),
    },
  }),
  commentController.create,
);

commentRouter.get(
  '/:professionalId',
  commentController.index,
);

export default commentRouter;
