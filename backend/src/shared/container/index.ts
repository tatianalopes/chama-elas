import { container } from 'tsyringe';

import IExampleRepository from '@modules/example/repositories/IExampleRepository';
import ExampleRepository from '@modules/example/repositories/ExampleRepository';

container.registerSingleton<IExampleRepository>(
  'ExampleRepository',
  ExampleRepository,
);
