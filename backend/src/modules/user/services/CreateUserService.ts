import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import { User } from '../repositories/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface Professional {
  zipCode: string;
  description: string;
  services: Array<string>;
}

interface IRequest {
  name: string;
  email: string;
  password: string;
  professionalInfo?: Professional;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ name, email, password, professionalInfo }: IRequest): Promise<User> {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashPassword = await this.hashProvider.generateHash(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashPassword,
      professionalInfo
    });

    return user;
  }
}

export default CreateUserService;
