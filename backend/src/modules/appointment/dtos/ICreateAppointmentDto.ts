import { Appointment } from "../repositories/entities/Appointment";

export default interface ICreateAppointmentDto {
  date: Appointment['date'];
  user: Appointment['user'];
  professional: Appointment['professional'];

}
