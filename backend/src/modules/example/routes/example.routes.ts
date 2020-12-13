import { Router } from 'express';

import ExampleController from '../controllers/ExampleController';

const exampleRouter = Router();
const exampleController = new ExampleController();

exampleRouter.post(
  '/',
  exampleController.create,
);

export default exampleRouter;
