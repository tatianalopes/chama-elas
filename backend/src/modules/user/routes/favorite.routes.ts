import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/user/middlewares/ensureAuthenticated';

import FavoriteController from '../controllers/FavoriteController';

const favoriteRouter = Router();
const favoriteController = new FavoriteController();

favoriteRouter.use(ensureAuthenticated);

favoriteRouter.patch(
  '/',
  celebrate({
    [Segments.BODY]: {
      professionalId: Joi.string().required(),
    },
  }),
  favoriteController.update,
);

export default favoriteRouter;
