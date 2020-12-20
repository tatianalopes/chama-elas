import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FavoriteProfessionalService from '../services/FavoriteProfessionalService';
import UnfavoriteProfessionalService from '../services/UnfavoriteProfessionalService';

export default class FavoriteController {
  public async create(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { professionalId } = request.body;

    const favoriteProfessional = container.resolve(FavoriteProfessionalService);
    await favoriteProfessional.execute({
      userId,
      professionalId
    });

    return response.send();
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { professionalId } = request.body;

    const unfavoriteProfessional = container.resolve(UnfavoriteProfessionalService);
    await unfavoriteProfessional.execute({
      userId,
      professionalId
    });

    return response.send();
  }
}
