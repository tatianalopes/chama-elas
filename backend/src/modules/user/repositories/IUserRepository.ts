import ICreateUserDto from "../dtos/ICreateUserDto";
import IFindAllProfessionalsDto from "../dtos/IFindAllProfessionalsDto";
import { User } from "./entities/User";

export default interface IUserRepository {
  create(data: ICreateUserDto): Promise<User>;
  update(user: User): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findProfessionals(data: IFindAllProfessionalsDto): Promise<User[]>;
}
