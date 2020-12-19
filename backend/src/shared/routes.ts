import { Router } from 'express';

import userRouter from '@modules/user/routes/user.routes';
import sessionRouter from '@modules/user/routes/session.routes';
import professionalRouter from '@modules/user/routes/professional.routes';
import appointmentRouter from '@modules/appointment/routes/appointment.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/session', sessionRouter);
routes.use('/professional', professionalRouter);
routes.use('/appointment', appointmentRouter);

export default routes;
