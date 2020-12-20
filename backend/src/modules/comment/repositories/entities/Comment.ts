import mongoose, { Schema, Document } from 'mongoose';

export interface Comment extends Document {
  professionalId: string;
  userName: string;
  userAvatar?: string;
  comment: string;
}

const CommentSchema: Schema = new Schema({
  professionalId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  userName: {
    type: String,
    required: true
  },
  userAvatar: String,
  comment: {
    type: String,
    required: true
  },
}, { timestamps: true });

export default mongoose.model<Comment>('Comment', CommentSchema);
