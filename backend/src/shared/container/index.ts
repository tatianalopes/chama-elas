import { container } from 'tsyringe';

import '@modules/user/providers';

import IUserRepository from '@modules/user/repositories/IUserRepository';
import UserRepository from '@modules/user/repositories/UserRepository';

import IAppointmentRepository from '@modules/appointment/repositories/IAppointmentRepository';
import AppointmentRepository from '@modules/appointment/repositories/AppointmentRepository';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository,
);

container.registerSingleton<IAppointmentRepository>(
  'AppointmentRepository',
  AppointmentRepository,
);
