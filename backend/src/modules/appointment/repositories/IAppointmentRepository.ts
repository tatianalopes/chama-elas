import ICreateAppointmentDto from '../dtos/ICreateAppointmentDto';
import { Appointment } from './entities/Appointment';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDto): Promise<Appointment>;
  findByDate(date: Date, professionalId: string): Promise<Appointment | null>;
}
