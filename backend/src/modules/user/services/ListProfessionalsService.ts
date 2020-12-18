import { injectable, inject } from 'tsyringe';
import { User } from '../repositories/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  userId?: string;
}

@injectable()
class ListProfessionalsService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ userId }: IRequest): Promise<User[]> {
    const users = await this.userRepository.findProfessionals({ exceptUserId: userId });

    return users;
  }
}

export default ListProfessionalsService;
