import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  templateId: mongoose.Types.ObjectId;
  institutionId?: mongoose.Types.ObjectId;
  content: any; // Canvas content
  isFavorite: boolean;
  isPublic: boolean;
  versions: Array<{
    id: string;
    content: any;
    createdAt: Date;
    name: string;
  }>;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: String,
    templateId: { type: Schema.Types.ObjectId, ref: 'Template', required: true },
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution' },
    content: { type: Schema.Types.Mixed, required: true },
    isFavorite: { type: Boolean, default: false },
    isPublic: { type: Boolean, default: false },
    versions: [
      {
        id: String,
        content: Schema.Types.Mixed,
        createdAt: { type: Date, default: Date.now },
        name: String,
      },
    ],
  },
  { timestamps: true }
);

projectSchema.index({ userId: 1, createdAt: -1 });

export const Project = mongoose.model<IProject>('Project', projectSchema);
