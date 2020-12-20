import { container } from 'tsyringe';

import '@modules/user/providers';

import IUserRepository from '@modules/user/repositories/IUserRepository';
import UserRepository from '@modules/user/repositories/UserRepository';

import ICommentRepository from '@modules/comment/repositories/ICommentRepository';
import CommentRepository from '@modules/comment/repositories/CommentRepository';

import IAppointmentRepository from '@modules/appointment/repositories/IAppointmentRepository';
import AppointmentRepository from '@modules/appointment/repositories/AppointmentRepository';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository,
);

container.registerSingleton<ICommentRepository>(
  'CommentRepository',
  CommentRepository,
);

container.registerSingleton<IAppointmentRepository>(
  'AppointmentRepository',
  AppointmentRepository,
);
