import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import ProfessionalController from '../controllers/ProfessionalController';

const professionalRouter = Router();
const professionalController = new ProfessionalController();

professionalRouter.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      userId: Joi.string()
    },
  }),
  professionalController.index,
);

export default professionalRouter;
