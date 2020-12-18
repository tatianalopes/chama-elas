import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProfessionalsService from '../services/ListProfessionalsService';

export default class ProfessionalController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProfessionals = container.resolve(ListProfessionalsService);
    const professionals = await listProfessionals.execute({ userId: request.body.userId });

    return response.json(professionals);
  }
}
