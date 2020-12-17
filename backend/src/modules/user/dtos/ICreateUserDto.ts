import { User } from "../repositories/entities/User";

export default interface ICreateUserDto {
  email: User['email'];
  name: User['name'];
  password: User['password'];
  avatar?: User['avatar'];
  favorites?: User['favorites'];
  professionalInfo?: User['professionalInfo'];
}
