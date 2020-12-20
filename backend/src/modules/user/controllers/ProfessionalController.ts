import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProfessionalsService from '../services/ListProfessionalsService';
import ShowProfileService from '../services/ShowProfileService';

export default class ProfessionalController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProfessionals = container.resolve(ListProfessionalsService);
    const professionals = await listProfessionals.execute({ userId: request.body.userId });

    return response.json(professionals);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProfile = container.resolve(ShowProfileService);
    const professional = await showProfile.execute({ userId: id });

    return response.json(professional);
  }
}
