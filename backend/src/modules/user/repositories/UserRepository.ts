import ICreateUserDto from "../dtos/ICreateUserDto";
import IUserRepository from "./IUserRepository";
import UserModel, { User } from "./entities/User";
import IFindAllProfessionalsDto from "../dtos/IFindAllProfessionalsDto";

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

  public async findProfessionals({ exceptUserId }: IFindAllProfessionalsDto): Promise<User[]> {
    if (exceptUserId) {
      return UserModel.find({ _id: { $ne: exceptUserId }, professionalInfo: { $exists: true } });
    }
    return UserModel.find({ professionalInfo: { $exists: true } });
  }

  public async addFavorite(userId: string, professionalId: string): Promise<boolean> {
    const res = await UserModel.updateOne(
      { _id: userId, 'favorites': {$ne: professionalId} },
      { $push: { 'favorites': professionalId } }
    );

    return res.nModified > 0;
  }

  public async removeFavorite(userId: string, professionalId: string): Promise<boolean> {
    const res = await UserModel.updateOne(
      { _id: userId },
      { $pull: { 'favorites': professionalId } }
    );

    return res.nModified > 0;
  }
}

export default UserRepository;

