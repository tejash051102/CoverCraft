import mongoose, { Schema, Document } from 'mongoose';

export interface ITemplate extends Document {
  name: string;
  description: string;
  category: string;
  thumbnail?: string;
  content: any; // Canvas content
  isDefault: boolean;
  isPremium?: boolean;
  createdBy?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const templateSchema = new Schema<ITemplate>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: String,
    content: { type: Schema.Types.Mixed, required: true },
    isDefault: { type: Boolean, default: false },
    isPremium: { type: Boolean, default: false },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

templateSchema.index({ category: 1, isDefault: 1 });

export const Template = mongoose.model<ITemplate>('Template', templateSchema);
