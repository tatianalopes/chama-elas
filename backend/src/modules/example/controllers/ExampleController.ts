import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateExampleService from '@modules/example/services/CreateExampleService';

export default class ExampleController {
  public async create(request: Request, response: Response): Promise<Response> {
    const CreateExample = container.resolve(CreateExampleService);
    const user = await CreateExample.execute({
      property: '',
    });

    return response;
  }
}
