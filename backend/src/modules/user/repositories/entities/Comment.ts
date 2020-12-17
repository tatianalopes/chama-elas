import mongoose, { Schema, Document } from 'mongoose';

export interface Comment extends Document {
  name: string;
  avatar?: string;
  comment: string;
}

const CommentSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  avatar: String,
  comment: {
    type: String,
    required: true
  },
}, { timestamps: true });

export default mongoose.model<Comment>('Comment', CommentSchema);
