import { Router } from 'express';

import userRouter from '@modules/user/routes/user.routes';
import sessionRouter from '@modules/user/routes/session.routes';
import professionalRouter from '@modules/user/routes/professional.routes';
import profileRouter from '@modules/user/routes/profile.routes';
import favoriteRouter from '@modules/user/routes/favorite.routes';
import appointmentRouter from '@modules/appointment/routes/appointment.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/session', sessionRouter);
routes.use('/professional', professionalRouter);
routes.use('/profile', profileRouter);
routes.use('/favorite', favoriteRouter);
routes.use('/appointment', appointmentRouter);

export default routes;
