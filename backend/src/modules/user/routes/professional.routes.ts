import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import ProfessionalController from '../controllers/ProfessionalController';

const professionalRoute = Router();
const professionalController = new ProfessionalController();

professionalRoute.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      userId: Joi.string()
    },
  }),
  professionalController.index,
);

export default professionalRoute;
