import ICreateUserDto from "../dtos/ICreateUserDto";
import IUserRepository from "./IUserRepository";
import UserModel, { User } from "./entities/User";

class UserRepository implements IUserRepository {

  public async create(data: ICreateUserDto): Promise<User> {
    return UserModel.create(data);
  }

  public async update(user: User): Promise<User | null> {
    return UserModel.findByIdAndUpdate(
      user._id,
      user,
      { new: true });
  }

  public async findById(id: string): Promise<User | null> {
    return UserModel.findById(id);
  }

  public async findByEmail(email: string): Promise<User | null> {
    return UserModel.findOne({ email });
  }

  public async findProfessionals(userId: string): Promise<User[]> {
    return UserModel.find({ _id: { $ne: userId }, professionalInfo: { $exists: true }});
  }
}

export default UserRepository;

