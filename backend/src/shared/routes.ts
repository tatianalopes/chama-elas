import { Router } from 'express';

import userRouter from '@modules/user/routes/user.routes';
import sessionRouter from '@modules/user/routes/session.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/session', sessionRouter);

export default routes;
