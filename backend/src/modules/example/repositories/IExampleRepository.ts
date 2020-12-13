import ICreateExampleDto from "../dtos/ICreateExampleDto";

export default interface IExampleRepository {
  create(data: ICreateExampleDto): Promise<void>;
  find(): Promise<void>;
}
