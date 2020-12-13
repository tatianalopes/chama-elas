import ICreateExampleDto from "../dtos/ICreateExampleDto";
import IExampleRepository from "./IExampleRepository";

class ExampleRepository implements IExampleRepository {

  public async create(data: ICreateExampleDto): Promise<void> {

  }

  public async find(): Promise<void> {

  }
}

export default ExampleRepository;

