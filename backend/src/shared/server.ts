import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';
import handleErrors from './middlewares/handleErrors';

import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.use(handleErrors);

app.listen(process.env.PORT);
