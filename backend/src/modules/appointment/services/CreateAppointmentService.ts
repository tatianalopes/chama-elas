import { startOfHour, isBefore } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IAppointmentRepository from '../repositories/IAppointmentRepository';
import { Appointment } from '../repositories/entities/Appointment';

interface User {
  id: string;
  name: string;
  avatar?: string;
}

interface IRequest {
  date: Date;
  user: User;
  professional: User;
}

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository: IAppointmentRepository,
  ) {}

  public async execute({
    date,
    user,
    professional
  }: IRequest): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    if (isBefore(appointmentDate, Date.now())) {
      throw new AppError('You cannot create an appointment in a past date');
    }

    if (user.id === professional.id) {
      throw new AppError('You cannot create an appointment with yourself');
    }

    const findAppointmentInSameDate = await this.appointmentRepository.findByDate(
      appointmentDate,
      professional.id,
    );
    if (findAppointmentInSameDate) {
      throw new AppError('The selected date is already booked');
    }

    const appointment = await this.appointmentRepository.create({
      date: appointmentDate,
      user,
      professional,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
