import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { User } from '../repositories/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  userId: string;
  professionalId: string;
}

@injectable()
class FavoriteProfessionalService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ userId, professionalId }: IRequest): Promise<void> {
    const added = await this.userRepository.addFavorite(userId, professionalId);

    if (!added) {
      throw new AppError('Could not add professional to favorites. Check if professional is not already favorited.');
    }
  }
}

export default FavoriteProfessionalService;
