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

  public async execute({ userId, professionalId }: IRequest): Promise<User> {
    const user = await this.userRepository.updateFavorites(userId, professionalId);

    if (!user) {
      throw new AppError("Could update user's favorites arrays.");
    }

    return user;
  }
}

export default FavoriteProfessionalService;
