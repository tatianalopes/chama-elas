import mongoose, { Schema, Document } from 'mongoose';

interface User {
  id: string;
  name: string;
  avatar?: string;
}

export interface Appointment extends Document {
  date: Date;
  user: User;
  professional: User;
}

const AppointmentSchema: Schema = new Schema({
  date: Schema.Types.Date,
  user: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    avatar: String,
  },
  professional: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    avatar: String,
  }
});

export default mongoose.model<Appointment>('Appointment', AppointmentSchema);
