import mongoose, { Schema, Document } from 'mongoose';

export interface IInstitution extends Document {
  name: string;
  state: string;
  city: string;
  district: string;
  type: 'school' | 'college' | 'university' | 'polytechnic' | 'iti';
  logo?: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  website?: string;
  email?: string;
  phone?: string;
  address?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const institutionSchema = new Schema<IInstitution>(
  {
    name: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    type: { type: String, enum: ['school', 'college', 'university', 'polytechnic', 'iti'], required: true },
    logo: String,
    logoUrl: String,
    primaryColor: { type: String, default: '#3B82F6' },
    secondaryColor: { type: String, default: '#8B5CF6' },
    website: String,
    email: String,
    phone: String,
    address: String,
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Create indexes for search
institutionSchema.index({ name: 'text', city: 'text', state: 'text' });

export const Institution = mongoose.model<IInstitution>('Institution', institutionSchema);
