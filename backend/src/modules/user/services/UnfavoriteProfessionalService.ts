import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  userId: string;
  professionalId: string;
}

@injectable()
class UnfavoriteProfessionalService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ userId, professionalId }: IRequest): Promise<void> {
    const removed = await this.userRepository.removeFavorite(userId, professionalId);

    if (!removed) {
      throw new AppError('Could not remove professional to favorites. Check if professional was really favorited.');
    }
  }
}

export default UnfavoriteProfessionalService;
