import mongoose, { Schema, Document } from 'mongoose';

interface Schedule {
  day: Number;
  hour: Number;
}

interface Professional {
  zipCode: string;
  description: string;
  services: Array<string>;
  schedule?: Array<Schedule>;
  rating?: Number;
}

export interface User extends Document {
  email: string;
  name: string;
  password: string;
  avatar?: string;
  favorites?: Array<User['_id']>;
  professionalInfo?: Professional;
}

const ProfessionalSchema: Schema = new Schema({
  zipCode: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  services: {
    type: [String],
    required: true
  },
  schedule: [{
    day: Number,
    hour: Number
  }],
  rating: Number
});

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: String,
  favorites: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  professionalInfo: ProfessionalSchema
});

export default mongoose.model<User>('User', UserSchema);
