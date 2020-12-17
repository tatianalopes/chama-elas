import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/user/services/CreateUserService';

export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const userInfo = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      professionalInfo: request.body.professionalInfo,
    };

    const createUser = container.resolve(CreateUserService);
    const user = await createUser.execute(userInfo);

    return response.json(user);
  }
}
