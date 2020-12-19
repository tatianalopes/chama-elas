import AppError from "@shared/errors/AppError";
import ICreateAppointmentDto from "../dtos/ICreateAppointmentDto";
import AppointmentModel, { Appointment } from "./entities/Appointment";
import IAppointmentsRepository from "./IAppointmentRepository";

class AppointmentRepository implements IAppointmentsRepository {
  public async create({
    date,
    user,
    professional
  }: ICreateAppointmentDto): Promise<Appointment> {
    try {
      const appointment = await AppointmentModel.create({
        date,
        user,
        professional,
      });

      return appointment;
    } catch(err) {
      console.log(err);
      throw new AppError("error");
    }
  }

  public async findByDate(
    date: Date,
    professionalId: string,
  ): Promise<Appointment | null> {
    return AppointmentModel.findOne({
      date,
      'professional.id': professionalId,
     });
  }
}

export default AppointmentRepository;
