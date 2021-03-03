import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FavoriteProfessionalService from '../services/FavoriteProfessionalService';

export default class FavoriteController {
  public async update(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { professionalId } = request.body;

    const favoriteProfessional = container.resolve(FavoriteProfessionalService);
    const user = await favoriteProfessional.execute({
      userId,
      professionalId
    });

    return response.json(user.favorites);
  }
}
