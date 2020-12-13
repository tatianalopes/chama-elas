import { injectable, inject } from 'tsyringe';

import IExampleRepository from '../repositories/IExampleRepository';

interface IRequest {
  property: string,
}

@injectable()
class CreateExampleService {
  constructor(
    @inject('ExampleRepository')
    private exampleRepository: IExampleRepository,
  ) {}

  public async execute({ property }: IRequest): Promise<void> {
    await this.exampleRepository.create({
      property,
    });
  }
}

export default CreateExampleService;
