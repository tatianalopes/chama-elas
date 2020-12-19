import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointment/services/CreateAppointmentService';
import AppError from '@shared/errors/AppError';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { date, user, professional } = request.body;

    if (userId !== user.id) {
      return response.send(new AppError('You cannot create an appointment for another user.', 401));
    }

    const createAppointment = container.resolve(CreateAppointmentService);
    const appointment = await createAppointment.execute({
      date,
      user,
      professional,
    });

    return response.json(appointment);
  }
}
