import { Router } from 'express';

import exampleRouter from '@modules/example/routes/example.routes';

const routes = Router();

routes.use('/example', exampleRouter);

export default routes;
