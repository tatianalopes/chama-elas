import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/user/middlewares/ensureAuthenticated';

import AppointmentController from '../controllers/AppointmentController';

const appointmentRouter = Router();
const appointmentController = new AppointmentController();

appointmentRouter.use(ensureAuthenticated);

appointmentRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      date: Joi.date().required(),
      user: Joi.object().required(),
      professional: Joi.object().required(),
    },
  }),
  appointmentController.create,
);

export default appointmentRouter;
