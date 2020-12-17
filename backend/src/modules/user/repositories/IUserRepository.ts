import ICreateUserDto from "../dtos/ICreateUserDto";
import { User } from "./entities/User";

export default interface IUserRepository {
  create(data: ICreateUserDto): Promise<User>;
  update(user: User): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findProfessionals(userId: string): Promise<User[]>;
}
